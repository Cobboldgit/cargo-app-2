import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1Sm7B4VIhIETcClHMMbuAuVJD6xPfmzQ",
  authDomain: "cargo-app-96db6.firebaseapp.com",
  projectId: "cargo-app-96db6",
  storageBucket: "cargo-app-96db6.appspot.com",
  messagingSenderId: "83600462996",
  appId: "1:83600462996:web:376240a84ec1c4ea595081",
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
auth.languageCode = "it";
export const googleProvider = new GoogleAuthProvider();
export default firebase;
