import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import type { Firestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onIdTokenChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setCookie } from "./cookie";
import { account } from "../store/account";

export let app: FirebaseApp;
export let db: Firestore;

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
    db = getFirestore(app);
    listenForAuthChanges();
  }
};

export const signIn = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      //redirect user
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
