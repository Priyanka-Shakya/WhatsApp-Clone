import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyAc1CTr0WRyffV_fIxYLo8CKYDl2PlXgmc",
  authDomain: "react-chat-app-7b1ab.firebaseapp.com",
  projectId: "react-chat-app-7b1ab",
  storageBucket: "react-chat-app-7b1ab.appspot.com",
  messagingSenderId: "855004804038",
  appId: "1:855004804038:web:cf85d6fc5548f4adc638c7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

// apiKey: import.meta.env.VITE_API_KEY,
// "AIzaSyAc1CTr0WRyffV_fIxYLo8CKYDl2PlXgmc"