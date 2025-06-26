// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW8w3-K5AwRJeY3DYqE2O-d_K4WLl--Fc",
  authDomain: "car-wash-app-parede.firebaseapp.com",
  projectId: "car-wash-app-parede",
  storageBucket: "car-wash-app-parede.appspot.com",
  messagingSenderId: "652729831628",
  appId: "1:652729831628:web:8b5712ce3be864705c7269",
  measurementId: "G-6TVWLPGKF6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
