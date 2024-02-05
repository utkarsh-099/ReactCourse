// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-u3d4EJyDSnLoTgyCxb1girpj2unYBEs",
  authDomain: "react-project-efaf0.firebaseapp.com",
  projectId: "react-project-efaf0",
  storageBucket: "react-project-efaf0.appspot.com",
  messagingSenderId: "559948620061",
  appId: "1:559948620061:web:68960b55105507cbf401f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)