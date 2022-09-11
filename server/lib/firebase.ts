// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";

// TODO: move this to .env.local file
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKOFUyYepKkE_982rIjq4umOauj4avtY",
  authDomain: "dev-checklist-c2225.firebaseapp.com",
  projectId: "dev-checklist-c2225",
  storageBucket: "dev-checklist-c2225.appspot.com",
  messagingSenderId: "140024092391",
  appId: "1:140024092391:web:263055ab45f66d39ec7442"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);
