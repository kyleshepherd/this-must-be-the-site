import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  type Firestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onIdTokenChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setCookie } from "./cookie";
import { account } from "../store/account";
import { goto } from "$app/navigation";
import {
  Month,
  type DateData,
  type MonthData,
  type PictureData,
  type PictureUploadData,
  type YearData,
} from "../data/pictures";

let app: FirebaseApp;
let db: Firestore;

export const initialiseFirebase = async () => {
  if (!app) {
    const options: FirebaseOptions = {
      apiKey: import.meta.env.VITE_FB_API_KEY,
      appId: import.meta.env.VITE_FB_APP_ID,
      authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FB_PROJECT_ID,
      messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
      storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    };
    app = initializeApp(options);
    listenForAuthChanges();
  }
};

export const signIn = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      goto("/upload");
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

const listenForAuthChanges = () => {
  const auth = getAuth();

  onIdTokenChanged(
    auth,
    async user => {
      if (user) {
        setCookie("account", user.uid);
        account.set({
          email: user.email || null,
          name: user.displayName || null,
          uid: user.uid,
        });
      } else {
        setCookie("account", "");
        account.set(null);
      }
    },
    err => console.error(err.message),
  );
};

export const addDate = async (date: string, pictures: PictureUploadData[]) => {
  db = getFirestore();
  const pics: PictureData[] = [];
  for (const pic of pictures) {
    const picUrl = await uploadPicture(pic);
    pics.push({ ...pic, picture: picUrl });
  }

  await addDoc(collection(db, "pics"), {
    date,
    pictures: pics,
  });
};

const uploadPicture = async (picture: PictureUploadData): Promise<string> => {
  if (picture.picture === undefined || picture.picture.length < 1) {
    return "";
  }
  const fileName = String(new Date().toISOString()) + picture.picture[0].name;
  const storage = getStorage();
  const picRef = ref(storage, fileName);
  await uploadBytes(picRef, picture.picture[0]);
  return fileName;
};

export const getImgURL = async (fileName: string): Promise<string> => {
  const storage = getStorage(app, "tmbts-dev-resized");
  const url = await getDownloadURL(ref(storage, fileName));
  return url;
};

export const getPictures = async (): Promise<YearData[]> => {
  const years: YearData[] = [];
  const dates: DateData[] = [];
  db = getFirestore();
  const storage = getStorage(app, "tmbts-dev-resized");
  const picsRef = collection(db, "pics");
  const q = query(picsRef, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc => {
    const docData = doc.data();
    dates.push({
      date: docData.date,
      pictures: docData.pictures,
    });
  });

  for (const date of dates) {
    for (const pic of date.pictures) {
      pic.picture = await getDownloadURL(ref(storage, pic.picture));
    }
  }

  if (dates.length < 1) {
    return [];
  }
  let currentYear: YearData = {
    year: new Date(dates[0].date).getFullYear(),
    months: [],
  };
  let currentMonth: MonthData = {
    dates: [],
    month: Object.values(Month)[new Date(dates[0].date).getMonth()],
  };
  dates.forEach(async date => {
    const year = new Date(date.date).getFullYear();
    const month = Object.values(Month)[new Date(date.date).getMonth()];
    if (!currentYear || currentYear.year !== year) {
      if (currentYear) {
        years.push(currentYear);
      }
      currentYear = {
        year,
        months: [],
      };
    }
    if (!currentMonth || currentMonth.month !== month) {
      if (currentMonth) {
        currentYear.months.push(currentMonth);
      }
      currentMonth = {
        month,
        dates: [],
      };
    }
    currentMonth.dates.push(date);
  });
  if (currentYear) {
    if (currentMonth) {
      currentYear.months.push(currentMonth);
    }
    years.push(currentYear);
  }

  return years;
};
