// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
const auth=getAuth()
const provider=new GoogleAuthProvider()
const storage=getStorage(app)

export {provider,db,auth,storage}
