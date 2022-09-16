// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPpnqaMo2GJ7t4wQlQznR1D4k6O4YsQZA",
    authDomain: "insta-reels28.firebaseapp.com",
    projectId: "insta-reels28",
    storageBucket: "insta-reels28.appspot.com",
    messagingSenderId: "926317600492",
    appId: "1:926317600492:web:558384272785b77fd2cfc9",
    // measurementId: "G-N3J0GJL1L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{ auth };