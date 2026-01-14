import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔹 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAalevKcMEsQ-7DCu4efGfi4jG__gTzAgo",
  authDomain: "project-5a6f0.firebaseapp.com",
  projectId: "project-5a6f0",
  storageBucket: "project-5a6f0.appspot.com",
  messagingSenderId: "877298532101",
  appId: "1:877298532101:web:32f6f71d293e0d495d416c",
};

// 🔹 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔹 Firestore Database
export const db = getFirestore(app);

// 🔹 Firebase Authentication
export const auth = getAuth(app);

// (optional) export app if needed later
export default app;
