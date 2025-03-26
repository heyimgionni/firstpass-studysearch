import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBef3_q5V2Bqje2TmSkXs0xYktzAsEvDxQ",
    authDomain: "firstpass-9be0a.firebaseapp.com",  
    projectId: "firstpass-9be0a",
    storageBucket: "firstpass-9be0a.firebasestorage.app",
    messagingSenderId: "898149738532",
    appId: "1:898149738532:web:e774e756d170c0a434d0b1",
    measurementId: "G-7PVHZMBC6V"
};
  
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};