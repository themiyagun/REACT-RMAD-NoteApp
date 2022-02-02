import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBG0YILS4d-XilPoVJvCvByThazgO18ysA",
    authDomain: "note-app-d88a3.firebaseapp.com",
    projectId: "note-app-d88a3",
    storageBucket: "note-app-d88a3.appspot.com",
    messagingSenderId: "628477172448",
    appId: "1:628477172448:web:f14550211139203f73ce85",
    measurementId: "G-0X3G7H2P8L"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);