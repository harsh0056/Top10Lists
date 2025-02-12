
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsWmdriSI7KC9kmjqmZ9wTG7sY9mumzDw",
  authDomain: "thetop10lists-2e9c2.firebaseapp.com",
  projectId: "thetop10lists-2e9c2",
  storageBucket: "thetop10lists-2e9c2.firebasestorage.app",
  messagingSenderId: "919898652704",
  appId: "1:919898652704:web:d63afd8fefe5885efebc45",
  measurementId: "G-NKBTBZJ3Q6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
