import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAyXW5rmBKE6CVO_alY3JaTprY6Qs4qqpE",
    authDomain: "quickstart-1573950019598.firebaseapp.com",
    databaseURL: "https://quickstart-1573950019598.firebaseio.com",
    projectId: "quickstart-1573950019598",
    storageBucket: "quickstart-1573950019598.appspot.com",
    messagingSenderId: "581831503315",
    appId: "1:581831503315:web:6da8aa3cb8f9d2ad14d326",
    measurementId: "G-RQL95BZ6NJ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };