// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCj-gE_Tk8eJNYKlVOZd74lOOq7SuCIdEg",
  authDomain: "miniproject-13a52.firebaseapp.com",
  projectId: "miniproject-13a52",
  storageBucket: "miniproject-13a52.appspot.com",
  messagingSenderId: "454260194382",
  appId: "1:454260194382:web:2bbbd9398d2564f43b571f",
  measurementId: "G-LWWPSPYM14"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
