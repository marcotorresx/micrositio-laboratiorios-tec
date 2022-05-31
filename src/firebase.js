import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoa8ArdIGObZzKMp8jW2vK6b-qpuPb9Ao",
  authDomain: "micrositio-tec-labs.firebaseapp.com",
  projectId: "micrositio-tec-labs",
  storageBucket: "micrositio-tec-labs.appspot.com",
  messagingSenderId: "667100223189",
  appId: "1:667100223189:web:a68f707aba08886aeb345c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
