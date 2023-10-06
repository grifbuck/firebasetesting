// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUIxYuTGcDeVmbeFG8tEe0MvYFYF9fFAo",
  authDomain: "test-80acc.firebaseapp.com",
  projectId: "test-80acc",
  storageBucket: "test-80acc.appspot.com",
  messagingSenderId: "733919992948",
  appId: "1:733919992948:web:cc458057257cd974bac521",
  measurementId: "G-M20VFPK16B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Export function to initialize firebase.
export const initFirebase = () => {
    return app;
}
