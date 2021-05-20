import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCquI1pMxAyeIxLvhleA-kWmdoIL1BPUOk",
  authDomain: "bedtimestories-48925.firebaseapp.com",
  projectId: "bedtimestories-48925",
  storageBucket: "bedtimestories-48925.appspot.com",
  messagingSenderId: "849598620141",
  appId: "1:849598620141:web:3f3e00cdda5c07369687e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
