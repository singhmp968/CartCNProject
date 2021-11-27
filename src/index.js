import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// // Import the functions you need from the SDKs you need
 //import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// for now using firebase 7.7.0
import * as firebase from 'firebase';
import 'firebase/firestore'; // importing frestore as we are using
/* fire base config */ 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePLmLDC75C7BfV5G0MeC-rxDo9dnKV70",
  authDomain: "cart-32c86.firebaseapp.com",
  projectId: "cart-32c86",
  storageBucket: "cart-32c86.appspot.com",
  messagingSenderId: "493532225448",
  appId: "1:493532225448:web:661299d20504b20c1d479d",
  measurementId: "G-06G1VPBS19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
   //const app = initializeApp(firebaseConfig);
   //initializeApp(firebaseConfig);
   //const analytics = getAnalytics(app);

/* fire base config */ 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

