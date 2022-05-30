import firebase from 'firebase'
import app from 'firebase/app'
 
const firebaseConfig = {
  apiKey: "AIzaSyAA-3oVuC2eaXLdSJexbXJZqw5ck79u1II",
  authDomain: "prueba1-ebe22.firebaseapp.com",
  projectId: "prueba1-ebe22",
  storageBucket: "prueba1-ebe22.appspot.com",
  messagingSenderId: "655748876719",
  appId: "1:655748876719:web:4f53e964dd060a3aecc75a"
};
 
app.initializeApp(firebaseConfig)
 
export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()