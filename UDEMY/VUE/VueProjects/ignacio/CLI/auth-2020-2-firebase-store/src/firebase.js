import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCwbM4FCa4HiDlWWP2ftPv1KCMJ9B-y2Fk",
	authDomain: "auth-2020-2-cc862.firebaseapp.com",
	projectId: "auth-2020-2-cc862",
	storageBucket: "auth-2020-2-cc862.appspot.com",
	messagingSenderId: "522898047084",
	appId: "1:522898047084:web:369cc89d43cfe755d6d849"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }