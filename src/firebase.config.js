// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFvxfa28_E-Yj7DZZjvziWaNwnO5GTo6M",
  authDomain: "yt-4c4fe.firebaseapp.com",
  projectId: "yt-4c4fe",
  storageBucket: "yt-4c4fe.appspot.com",
  messagingSenderId: "997728289182",
  appId: "1:997728289182:web:dfa478974471c91176168f",
  measurementId: "G-RZF92232FT"
};

// Initialize Firebase
   export const app = initializeApp(firebaseConfig);
export default firebaseConfig