import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBcPL1EbMLdEM4hAIj8uQuTaeyHxGF023A",
    authDomain: "drive-sneha.firebaseapp.com",
    projectId: "drive-sneha",
    storageBucket: "drive-sneha.appspot.com",
    messagingSenderId: "828607678382",
    appId: "1:828607678382:web:c9bfc0f3770bb7e551ea3f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }