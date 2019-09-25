import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyA8PPaik-LO_ktIS_HxzHrzg5ZOjbehPw8",
    authDomain: "react-student-system.firebaseapp.com",
    databaseURL: "https://react-student-system.firebaseio.com",
    projectId: "react-student-system",
    storageBucket: "react-student-system.appspot.com",
    messagingSenderId: "782817403591",
    appId: "1:782817403591:web:60adc6d754a25ec6c754e2"
  };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;