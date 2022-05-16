import firebase from 'firebase'
import app from 'firebase/app'
 
const firebaseConfig = {
   apiKey: "AIzaSyAh-R0eA--_Jn7_C2Eb6t3ttgz5tyguEog",
   authDomain: "prueba1-4ed46.firebaseapp.com",
   projectId: "prueba1-4ed46",
   storageBucket: "prueba1-4ed46.appspot.com",
   messagingSenderId: "82576884853",
   appId: "1:82576884853:web:9458f344ff4daa28ebe43c"
};
 
app.initializeApp(firebaseConfig)
 
export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()