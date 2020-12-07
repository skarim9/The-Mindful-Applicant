import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

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
const auth = firebase.auth();

export { firebase, db, auth };


const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await db.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};