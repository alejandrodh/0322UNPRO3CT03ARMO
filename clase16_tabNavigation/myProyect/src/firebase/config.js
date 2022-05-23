import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzaRP_K5z2DBaYt9ykbpR-jpRZCWOd5-8",
  authDomain: "hfhsdsdytdt.firebaseapp.com",
  projectId: "hfhsdsdytdt",
  storageBucket: "hfhsdsdytdt.appspot.com",
  messagingSenderId: "780328493682",
  appId: "1:780328493682:web:2cd105fe092808becc98eb"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();