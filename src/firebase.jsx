// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyAOOp0ilgwT1D4HR5eZSU5OL4we9wQt4AU",
    authDomain: "webxv-app.firebaseapp.com",
    projectId: "webxv-app",
    storageBucket: "webxv-app.firebasestorage.app",
    messagingSenderId: "876946301809",
    appId: "1:876946301809:web:d50a99ec338c5117d54cd0",
    measurementId: "G-3ZSQWTKDRF"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
