import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDEVubqCrdb2SG_Ft_0-dIdTC8d3XhYMQ",
  authDomain: "todoapp-33433.firebaseapp.com",
  projectId: "todoapp-33433",
  storageBucket: "todoapp-33433.appspot.com",
  messagingSenderId: "978498095329",
  appId: "1:978498095329:web:88dd6056f4192416230fa0",
  measurementId: "G-JEJ8GCFFJE",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
