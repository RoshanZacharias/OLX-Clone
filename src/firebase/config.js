import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCQsuLuagm8IiwT_NdGkP1ZQzGTWbXD4Ck",
    authDomain: "olx-clone-b1e2d.firebaseapp.com",
    projectId: "olx-clone-b1e2d",
    storageBucket: "olx-clone-b1e2d.appspot.com",
    messagingSenderId: "347080892857",
    appId: "1:347080892857:web:9c6073fe04d738e8b89668",
    measurementId: "G-HNSYZ6L2NL"
  };


  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp)
  
  export default db