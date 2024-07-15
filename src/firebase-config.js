// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJNr02r7uXUgwvvBdeP8oYrBYa7_-oN5Y",
  authDomain: "bloog-af5f2.firebaseapp.com",
  projectId: "bloog-af5f2",
  storageBucket: "bloog-af5f2.appspot.com",
  messagingSenderId: "883307335408",
  appId: "1:883307335408:web:989d327879f5cc13523c35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
