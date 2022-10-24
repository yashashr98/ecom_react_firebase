// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyChlr7bEJAgQ8eTsz2itVZ8o44iODnr92c",
  authDomain: "ecommerce-3010e.firebaseapp.com",
  projectId: "ecommerce-3010e",
  storageBucket: "ecommerce-3010e.appspot.com",
  messagingSenderId: "362938020755",
  appId: "1:362938020755:web:f0053bea6f98eb327d2e66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)