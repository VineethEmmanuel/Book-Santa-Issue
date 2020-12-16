import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBjjeH7114kR_h-PiPSVcMidoSnEJaHhRs",
  authDomain: "book-santa-739b8.firebaseapp.com",
  databaseURL: "https://book-santa-739b8.firebaseio.com",
  projectId: "book-santa-739b8",
  storageBucket: "book-santa-739b8.appspot.com",
  messagingSenderId: "224557044224",
  appId: "1:224557044224:web:6e6ce8ebe06cd170bcbee5"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
