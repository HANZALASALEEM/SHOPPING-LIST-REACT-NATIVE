// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBE0pkDfzDfC3yKbWJtn3_eLVYFnou4xu0",
	authDomain: "shopping-list-d6cf2.firebaseapp.com",
	projectId: "shopping-list-d6cf2",
	storageBucket: "shopping-list-d6cf2.appspot.com",
	messagingSenderId: "832964118242",
	appId: "1:832964118242:web:31976172aab539e36ac0bb",
	measurementId: "G-QQN79N8Q4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { app, db, getFirestore, collection, addDoc, getDocs };
