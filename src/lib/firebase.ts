import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import type { Firestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
  }
};
