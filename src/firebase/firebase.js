// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCfkfzPdlcW_7WL-6kVmTsQK_S7B4wrN3E",
  authDomain: "demoapp-b152a.firebaseapp.com",
  projectId: "demoapp-b152a",
  storageBucket: "demoapp-b152a.firebasestorage.app",
  messagingSenderId: "834939701689",
  appId: "1:834939701689:web:3888f9b58bbb6a0d644e68",
  measurementId: "G-SKETSKTMT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);    
export const auth = getAuth(app);
export default app;