// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

     apiKey: "AIzaSyDVc8T8kpgZfY9ufjxnS29CSADi7unWRfU",
    authDomain: "manufacturer-website-e4c12.firebaseapp.com",
    projectId: "manufacturer-website-e4c12",
    storageBucket: "manufacturer-website-e4c12.appspot.com",
    messagingSenderId: "66267841046",
    appId: "1:66267841046:web:9554241fdc3300edeceb37",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
