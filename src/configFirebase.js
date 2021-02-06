import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC2quGywUZl-fkBaJ7WvFMW_ZuI2ZsldmU",
    authDomain: "nativeauthhhh.firebaseapp.com",
    databaseURL: "https://nativeauthhhh-default-rtdb.firebaseio.com",
    projectId: "nativeauthhhh",
    storageBucket: "nativeauthhhh.appspot.com",
    messagingSenderId: "815468618061",
    appId: "1:815468618061:web:27d8493568a20e32669704",
    measurementId: "G-HLPTPC5W6D"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;