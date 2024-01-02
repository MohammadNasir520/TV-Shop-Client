// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7BW8sN0xwz5unVzx6BPBgSFBKgdBO51Q",
    authDomain: "sell-your-tv.firebaseapp.com",
    projectId: "sell-your-tv",
    storageBucket: "sell-your-tv.appspot.com",
    messagingSenderId: "881319410661",
    appId: "1:881319410661:web:f9492e32780c388c7a4d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app