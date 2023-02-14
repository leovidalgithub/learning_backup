import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyDUKuN578t2SQBuChvqlucxw1UyaZOeVIA",
	authDomain: "facebook-9a62f.firebaseapp.com",
	projectId: "facebook-9a62f",
	storageBucket: "facebook-9a62f.appspot.com",
	messagingSenderId: "726504592569",
	appId: "1:726504592569:web:44a160b21e1437f2b0f768"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}