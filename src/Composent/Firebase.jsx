// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDBHA5o4sWw0GxBw7BMwnewFHkN8wt0hbw",
  authDomain: "app-clone-b8297.firebaseapp.com",
  projectId: "app-clone-b8297",
  storageBucket: "app-clone-b8297.appspot.com",
  messagingSenderId: "309709533039",
  appId: "1:309709533039:web:885ffbde84ab6b81a4829a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
const auth=getAuth()
const provider=new GoogleAuthProvider()
const storage=getStorage(app)

export {provider,db,auth,storage}