// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnqyPmznrNVUJ17hE5NLZSQiVMp7qfWeA",
    authDomain: "blog-af9a0.firebaseapp.com",
    projectId: "blog-af9a0",
    storageBucket: "blog-af9a0.appspot.com",
    messagingSenderId: "486242583673",
    appId: "1:486242583673:web:4995f4df61d1a57895c0a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
