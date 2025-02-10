// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsWmdriSI7KC9kmjqmZ9wTG7sY9mumzDw",
  authDomain: "thetop10lists-2e9c2.firebaseapp.com",
  projectId: "thetop10lists-2e9c2",
  storageBucket: "thetop10lists-2e9c2.firebasestorage.app",
  messagingSenderId: "919898652704",
  appId: "1:919898652704:web:d63afd8fefe5885efebc45",
  measurementId: "G-NKBTBZJ3Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
