// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ee7a.firebaseapp.com",
  projectId: "mern-estate-2ee7a",
  storageBucket: "mern-estate-2ee7a.appspot.com",
  messagingSenderId: "114402079999",
  appId: "1:114402079999:web:b23d56c4ecef67a68648ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);