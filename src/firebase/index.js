import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBVyc4RR0A0glWHZrRtARCndwLY85VSDk0",
    authDomain: "upload-imager.firebaseapp.com",
    databaseURL: "https://upload-imager.firebaseio.com",
    projectId: "upload-imager",
    storageBucket: "upload-imager.appspot.com",
    messagingSenderId: "759929968388",
    appId: "1:759929968388:web:3d67a750a51cc589b26251"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase