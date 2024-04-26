import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaJ6rAhuh2KyKwB-qm1lWicOklNPvduiI",
  authDomain: "login-signup-auth-bee69.firebaseapp.com",
  projectId: "login-signup-auth-bee69",
  storageBucket: "login-signup-auth-bee69.appspot.com",
  messagingSenderId: "788032190476",
  appId: "1:788032190476:web:d76ca75db2e48e6dfd5629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbAuthProvider = new FacebookAuthProvider();
