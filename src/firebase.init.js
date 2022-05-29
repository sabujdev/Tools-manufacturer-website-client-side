// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDdjGAuciN5KfqtR1pg8tVHyP0HydCLW0",
  authDomain: "manufacturer-3d0e7.firebaseapp.com",
  projectId: "manufacturer-3d0e7",
  storageBucket: "manufacturer-3d0e7.appspot.com",
  messagingSenderId: "184889661216",
  appId: "1:184889661216:web:a8bdf113d1f707919a6945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
