import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updateEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "NOAPIKEY",
  authDomain: "NOAPIKEY",
  databaseURL: "NOAPIKEY",
  projectId: "NOAPIKEY",
  storageBucket: "NOAPIKEY",
  messagingSenderId: "NOAPIKEY",
  appId: "NOAPIKEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, EmailAuthProvider, reauthenticateWithCredential, updateEmail };
