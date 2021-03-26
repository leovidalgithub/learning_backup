import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDLHPboUORgChbzGdFOWlUb_r1X7RG6_jA",
	authDomain: "zzzzzzzzz-9985c.firebaseapp.com",
	projectId: "zzzzzzzzz-9985c",
	storageBucket: "zzzzzzzzz-9985c.appspot.com",
	messagingSenderId: "149791780735",
	appId: "1:149791780735:web:ae7860df418cad90fb344a"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { db }