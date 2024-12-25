// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtm-nT7HGtfyKgEvbxCrmAR3COvdb_EgI",
  authDomain: "eventmanager-acd23.firebaseapp.com",
  projectId: "eventmanager-acd23",
  storageBucket: "eventmanager-acd23.firebasestorage.app",
  messagingSenderId: "801759357218",
  appId: "1:801759357218:web:5dd4b7c241463d48251d7b",
  measurementId: "G-DW48HV9EMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
export const db = getFirestore(app);
export const analytics = getAnalytics(app);