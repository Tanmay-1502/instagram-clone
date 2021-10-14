import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVUjE7RSVkDd8RISJqruDWO7OJ9ZssqcE",
  authDomain: "instagram-clone-78090.firebaseapp.com",
  projectId: "instagram-clone-78090",
  storageBucket: "instagram-clone-78090.appspot.com",
  messagingSenderId: "278911485471",
  appId: "1:278911485471:web:a9c43dde9137b8b39cb72a",
  measurementId: "G-7B0H9GL7DY"
});
const db= firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage};