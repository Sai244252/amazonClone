// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8-O4rxdLffJbXx1EuRFV9Vvdted0PHWY",
  authDomain: "challenge-8ef3d.firebaseapp.com",
  projectId: "challenge-8ef3d",
  storageBucket: "challenge-8ef3d.appspot.com",
  messagingSenderId: "976751188559",
  appId: "1:976751188559:web:92af6287939b73b7f2683a",
  measurementId: "G-1CFD032YVC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
