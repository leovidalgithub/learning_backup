import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
	apiKey: "AIzaSyAXs45Dt49rEejtxkinOQeYTifSeQjcqNg",
	authDomain: "nuxt-crud-d0c24.firebaseapp.com",
	projectId: "nuxt-crud-d0c24",
	storageBucket: "nuxt-crud-d0c24.appspot.com",
	messagingSenderId: "967629262264",
	appId: "1:967629262264:web:5c6bd3f4eada05c252134d"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}