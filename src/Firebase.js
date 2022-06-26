// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwowiXob8-tGTtKMKC1qODOMaH1emFf5I",
  authDomain: "tesla-a7849.firebaseapp.com",
  projectId: "tesla-a7849",
  storageBucket: "tesla-a7849.appspot.com",
  messagingSenderId: "179122823508",
  appId: "1:179122823508:web:a9245093207afeb7ba68c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);