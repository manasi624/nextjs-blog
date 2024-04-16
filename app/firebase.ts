// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJu80igs8IhrTIFSYPAZpqPvy-CN6a1FE",
    authDomain: "mansis-blg.firebaseapp.com",
    projectId: "mansis-blg",
    storageBucket: "mansis-blg.appspot.com",
    messagingSenderId: "815427604173",
    appId: "1:815427604173:web:2961fef97249c42293e384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
