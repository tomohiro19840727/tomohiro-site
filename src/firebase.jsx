import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCAyvfNdi0waZBOI7TgLUQQZ5-YAhw0_Nc",
  authDomain: "tomohiro-site.firebaseapp.com",
  projectId: "tomohiro-site",
  storageBucket: "tomohiro-site.appspot.com",
  messagingSenderId: "174760171145",
  appId: "1:174760171145:web:db052d819dbba9448e9858",
  measurementId: "G-HQ6EWRWLKS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }