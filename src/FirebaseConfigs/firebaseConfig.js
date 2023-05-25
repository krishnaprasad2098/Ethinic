// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCX7n1yeipLRWYg2gom4pHO6Rn4nOpv15o",
  authDomain: "mini-project-e8608.firebaseapp.com",
  projectId: "mini-project-e8608",
  storageBucket: "mini-project-e8608.appspot.com",
  messagingSenderId: "183577511896",
  appId: "1:183577511896:web:9132d41d061b693fd594ad",
  measurementId: "G-N92QP6071K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
