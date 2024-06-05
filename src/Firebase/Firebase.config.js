
import { initializeApp } from "firebase/app";
console.log(import.meta.env.local)
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyBmZvn56dijD-lOTdeuT2AQnvJ7x9Hq_-8",
  authDomain: "strid-46e89.firebaseapp.com",
  projectId: "strid-46e89",
  storageBucket: "strid-46e89.appspot.com",
  messagingSenderId: "467073263611",
  appId: "1:467073263611:web:59fa6f662f9048d80b0d5e"
};


export const app = initializeApp(firebaseConfig);