import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAUveSSl2mjQLjdoM3ZJXmTBQgYy_gM0uo",
    authDomain: "update-arrow.firebaseapp.com",
    databaseURL: "https://update-arrow.firebaseio.com",
    projectId: "update-arrow",
    storageBucket: "update-arrow.appspot.com",
    messagingSenderId: "422828676334",
    appId: "1:422828676334:web:0b47eae326857fe1c14fff",
    measurementId: "G-3MXKPZNJ8N"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;