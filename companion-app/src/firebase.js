// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADePUYYwJxeL7sdBsRmr0beCbolUPggc",
  authDomain: "companion-app-5ee3a.firebaseapp.com",
  projectId: "companion-app-5ee3a",
  storageBucket: "companion-app-5ee3a.appspot.com",
  messagingSenderId: "144913279044",
  appId: "1:144913279044:web:494923d3107b223676f411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app