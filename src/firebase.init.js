// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEB5YhY_CJl91PDzaA6Zx5PeW2xwMAyHk",
  authDomain: "wedding-photographer-71122.firebaseapp.com",
  projectId: "wedding-photographer-71122",
  storageBucket: "wedding-photographer-71122.appspot.com",
  messagingSenderId: "190874452992",
  appId: "1:190874452992:web:e2508a9e1681dd5b5ac4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth