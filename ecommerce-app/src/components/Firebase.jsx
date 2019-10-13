import * as  firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8PPaik-LO_ktIS_HxzHrzg5ZOjbehPw8",
    authDomain: "react-student-system.firebaseapp.com",
    databaseURL: "https://react-student-system.firebaseio.com",
    projectId: "react-student-system",
    storageBucket: "react-student-system.appspot.com",
    messagingSenderId: "782817403591",
    appId: "1:782817403591:web:60adc6d754a25ec6c754e2"
  };

  const fire = firebase.initializeApp(config);
  export default fire;

//npm i --save firebase dev // update package
// ... spread operator
// firebase not supported array
//git ali-718 