import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBhoUIVfg0dcFD6H5pT5AeDuECXENiDzC4",
    authDomain: "streaming-website-866db.firebaseapp.com",
    projectId: "streaming-website-866db",
    storageBucket: "streaming-website-866db.appspot.com",
    messagingSenderId: "464400372544",
    appId: "1:464400372544:web:035fea5e19fd93ca43e0a5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword};
export default db;
