// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArGFGYV8fSY4aog51Op_G2xT85B0N2XI",
  authDomain: "ecommerce-cf901.firebaseapp.com",
  projectId: "ecommerce-cf901",
  storageBucket: "ecommerce-cf901.firebasestorage.app",
  messagingSenderId: "1012955938139",
  appId: "1:1012955938139:web:8d325e4cb84174fcd86e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };
