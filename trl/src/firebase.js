import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFoZDYnwDDGlf-fEt49VVGZ6dB-NIhrv8",
  authDomain: "trl-project-system.firebaseapp.com",
  projectId: "trl-project-system",
  storageBucket: "trl-project-system.firebasestorage.app",
  messagingSenderId: "145100670606",
  appId: "1:145100670606:web:112001e2a725d287242bdf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);