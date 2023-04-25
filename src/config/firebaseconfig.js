import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA5W3Mkclbr_385kwjk2E-6xz2ZESYqiOY",
    authDomain: "ciclo-seguro-tcc.firebaseapp.com",
    projectId: "ciclo-seguro-tcc",
    storageBucket: "ciclo-seguro-tcc.appspot.com",
    messagingSenderId: "770925622465",
    appId: "1:770925622465:web:b4fe735b1fc2649ada9040",
    measurementId: "G-R1R8V6KVTC"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore();
    
export default db;