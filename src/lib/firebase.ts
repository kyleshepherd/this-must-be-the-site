import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, type Firestore } from "firebase/firestore";
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
import type { PictureData, PictureUploadData } from "src/data/pictures";

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
  const storage = getStorage();
  const picRef = ref(storage, picture.picture[0].name);
  const snapshot = await uploadBytes(picRef, picture.picture[0]);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};
