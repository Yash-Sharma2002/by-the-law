// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDyJk_pKmo5isEuxzY6YJ8E9yJzXxCa9SA",
    authDomain: "dashboard-55a35.firebaseapp.com",
    projectId: "dashboard-55a35",
    storageBucket: "dashboard-55a35.appspot.com",
    messagingSenderId: "127481137711",
    appId: "1:127481137711:web:d90770372cb9f7bb0e54da",
    measurementId: "G-5W47PFDY8G"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, firestore, storage, firebaseConfig, auth, googleProvider };