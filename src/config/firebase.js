import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCqkxG91rc4rIi5nuU_6GPUiqrR71qzdu4",
  authDomain: "magnolia-8ecab.firebaseapp.com",
  projectId: "magnolia-8ecab",
  storageBucket: "magnolia-8ecab.appspot.com",
  messagingSenderId: "191897051726",
  appId: "1:191897051726:web:28c1db8f46ca1790d9591f"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)