// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyuqePwHRrwPIvYvU1M0SVaQ_8Zo10KfU",
    authDomain: "reactcv-232b8.firebaseapp.com",
    projectId: "reactcv-232b8",
    storageBucket: "reactcv-232b8.appspot.com",
    messagingSenderId: "678413476842",
    appId: "1:678413476842:web:23fb2e90aa3bb187b4c893",
    measurementId: "G-1F6511MCMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();