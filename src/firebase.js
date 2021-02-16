// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBp7S1hJYC0U-tg3_4IRP5YAEjsq3Th9hA",
    authDomain: "whatsappclonemernas.firebaseapp.com",
    projectId: "whatsappclonemernas",
    storageBucket: "whatsappclonemernas.appspot.com",
    messagingSenderId: "1671606312",
    appId: "1:1671606312:web:4c943d91d5766bca96051d",
    measurementId: "G-SLMZYH5NGG"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;