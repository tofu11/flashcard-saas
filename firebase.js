// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Tp2D9SFg0IFLwe5S9dvgqFkye8fWl8U",
  authDomain: "flashcards-d233b.firebaseapp.com",
  projectId: "flashcards-d233b",
  storageBucket: "flashcards-d233b.appspot.com",
  messagingSenderId: "517842549435",
  appId: "1:517842549435:web:4d21736c7487b5cdd3879e",
  measurementId: "G-TBMC7WTNLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);