import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQjBCgTWfV7jGQ2_tJSKkTdDzxc3bWPLU",
    authDomain: "react-line-clone-cca09.firebaseapp.com",
    projectId: "react-line-clone-cca09",
    storageBucket: "react-line-clone-cca09.appspot.com",
    messagingSenderId: "236213742664",
    appId: "1:236213742664:web:a0698e0dfba87438ad7c7d"

})
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {
    db,
    auth
}