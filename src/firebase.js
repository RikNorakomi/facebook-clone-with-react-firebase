import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhvUa6kywwZg17KXoNm88kyP8e5K9TKUU",
  authDomain: "react-facebook-clone.firebaseapp.com",
  databaseURL: "https://react-facebook-clone.firebaseio.com",
  projectId: "react-facebook-clone",
  storageBucket: "react-facebook-clone.appspot.com",
  messagingSenderId: "459353032905",
  appId: "1:459353032905:web:a3999f79f69314ba9c6518",
  measurementId: "G-YWF1DLT7WC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
