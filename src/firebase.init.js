// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr87yIv2cMpSsMDUqK1frHJVK3Y2uOH_k",
  authDomain: "assignment-11-warehouse.firebaseapp.com",
  projectId: "assignment-11-warehouse",
  storageBucket: "assignment-11-warehouse.appspot.com",
  messagingSenderId: "336516902845",
  appId: "1:336516902845:web:e65953e421e38084276cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;