import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  userProfile: null,
  apiKey: "AIzaSyD8S56NwMkd20Br5go4p3eXLnrVssngCEA",
  authDomain: "applications-37f37.firebaseapp.com",
  databaseURL: "https://applications-37f37.firebaseio.com",
  projectId: "applications-37f37",
  storageBucket: "applications-37f37.appspot.com",
  messagingSenderId: "715442741806",
  appId: "1:715442741806:web:de1095cb6a1993fb6635bf",
  measurementId: "G-X3QY4W4DKP"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase 