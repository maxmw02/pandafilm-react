import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Qco1D_PLW8uM9zNgjZZHpBPbvOXZvJw",
  authDomain: "movie-database-f8999.firebaseapp.com",
  projectId: "movie-database-f8999",
  storageBucket: "movie-database-f8999.firebasestorage.app",
  messagingSenderId: "64910397846",
  appId: "1:64910397846:web:42ad5e577160a4ae780db7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout}