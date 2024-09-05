import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlS1XGTa1TsFs0TyvFu1QDSET7VoNZFcs",
  authDomain: "rake-27719.firebaseapp.com",
  projectId: "rake-27719",
  storageBucket: "rake-27719.appspot.com",
  messagingSenderId: "963741250411",
  appId: "1:963741250411:web:0efd1e4b44b78b3daa522e",
  measurementId: "G-S16CBPGZJM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };