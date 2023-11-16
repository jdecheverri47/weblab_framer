// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMOyTznuZLSh1Hdwo7_EkKbigwOUvGMMA",
  authDomain: "weblab-f9532.firebaseapp.com",
  projectId: "weblab-f9532",
  storageBucket: "weblab-f9532.appspot.com",
  messagingSenderId: "371645071556",
  appId: "1:371645071556:web:9d0418ffb8f1355e2e8991",
  measurementId: "G-G00RDT52SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;