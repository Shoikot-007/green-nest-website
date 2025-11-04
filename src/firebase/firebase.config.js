import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNNwIl2JR85PLcVYz6I3qVOmW5kmy3veg",
  authDomain: "simple-firebase-auth-7432e.firebaseapp.com",
  projectId: "simple-firebase-auth-7432e",
  storageBucket: "simple-firebase-auth-7432e.firebasestorage.app",
  messagingSenderId: "222805813741",
  appId: "1:222805813741:web:04489b85fb3ec812779fe4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);