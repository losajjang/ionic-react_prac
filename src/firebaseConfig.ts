import * as firebase from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyBmYIPAvaJgiBdJ7JrI-D2TaxhQvSrdYcc",
  authDomain: "ionic-react-prac.firebaseapp.com",
  projectId: "ionic-react-prac",
  storageBucket: "ionic-react-prac.appspot.com",
  messagingSenderId: "706253795460",
  appId: "1:706253795460:web:ad315b1967b23d4c6712d1",
  measurementId: "G-B7RWV8BMRZ",
};

firebase.initializeApp(config);
export const auth = getAuth();

export async function loginUser(username: string, password: string) {
  const email = `${username}@asdf.com`;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
  //authenticate with firebase
  //if present, show dashboard
  //if not, show error
}
