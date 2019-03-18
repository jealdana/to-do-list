import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCz9U8SygXIfIOUjJQs1KjnQfkyXn-FmRY",
  authDomain: "to-do-list-8d92f.firebaseapp.com/",
  databaseURL: "https://to-do-list-8d92f.firebaseio.com/",
  storageBucket: "to-do-list-8d92f.appspot.com/",
  messagingSenderId: "347917134739"
};
var fire = firebase.initializeApp(config);
export default fire;