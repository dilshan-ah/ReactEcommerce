import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA41uEODF51QPZWTvhQRhNwxlNd7Kfsl3U",
  authDomain: "react-ecommerce-de4f0.firebaseapp.com",
  projectId: "react-ecommerce-de4f0",
  storageBucket: "react-ecommerce-de4f0.appspot.com",
  messagingSenderId: "190671888826",
  appId: "1:190671888826:web:572d62481be8fa8c193d83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();