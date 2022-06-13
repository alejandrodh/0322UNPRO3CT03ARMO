import firebase from 'firebase'
import app from 'firebase/app'
 
const firebaseConfig = {
  apiKey: "AIzaSyDM1UxlBWEt9BQ3nXY0ltQDYwqw5HHx7cs",
  authDomain: "pruebafinal-ed782.firebaseapp.com",
  projectId: "pruebafinal-ed782",
  storageBucket: "pruebafinal-ed782.appspot.com",
  messagingSenderId: "652878150867",
  appId: "1:652878150867:web:7e9d6764202780614aa826"
};
 
app.initializeApp(firebaseConfig)
 
export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()