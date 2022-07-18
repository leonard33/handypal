// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import {
  getFirestore,
  // eslint-disable-next-line no-unused-vars
  collection,
  // eslint-disable-next-line no-unused-vars
  getDocs,
  // eslint-disable-next-line no-unused-vars
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDAnukvpZgCV-rzPOefAVbEe-WSW419hZc",
  authDomain: "workman-a7ed6.firebaseapp.com",
  projectId: "workman-a7ed6",
  storageBucket: "workman-a7ed6.appspot.com",
  messagingSenderId: "375287949715",
  appId: "1:375287949715:web:b906c826a9c87349052066",
};
//initializeApp;
const firebaseApp = initializeApp(firebaseConfig);
// firestore database
const db = getFirestore(firebaseApp);

// firebase.auth();
const auth = getAuth();

// firebase.auth().signInWithPopup(provider);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
export default firebaseApp;
