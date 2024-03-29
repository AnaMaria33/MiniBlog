import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbjANrKww0gbj7tDPBtT7n36VJtp8P2DA",
  authDomain: "miniblog-7fff0.firebaseapp.com",
  projectId: "miniblog-7fff0",
  storageBucket: "miniblog-7fff0.appspot.com",
  messagingSenderId: "91941299919",
  appId: "1:91941299919:web:488083f366c59bed10b9ba"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);

export {db};