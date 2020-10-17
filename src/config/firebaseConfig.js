import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm3-wkz5deOsIiQfLSWQpAm9ETng-Qgk0",
    authDomain: "blackrockchallenge.firebaseapp.com",
    databaseURL: "https://blackrockchallenge.firebaseio.com",
    projectId: "blackrockchallenge",
    storageBucket: "blackrockchallenge.appspot.com",
    messagingSenderId: "31374015071",
    appId: "1:31374015071:web:38c18809f63f4e969b39ea",
    measurementId: "G-0QHGSE4MRP"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };
  