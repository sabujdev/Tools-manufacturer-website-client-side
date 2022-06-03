// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgKBp5RDTUOz0q2sFS_zpRFYTy_aHA89Q",
    authDomain: "product-manufacturer-d5fa0.firebaseapp.com",
    projectId: "product-manufacturer-d5fa0",
    storageBucket: "product-manufacturer-d5fa0.appspot.com",
    messagingSenderId: "386597471735",
    appId: "1:386597471735:web:4d825a8d9ce299132ddaf2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;