import React, { Component } from 'react';
import './App.css';
//import StudentForm from './components/Form';
//import UserStateProps from './components/StateProps';
//import UserRegistration from './components/RegisterForm';
import MyFunctions from './components/Functions';
import UserData from './components/ApiData';



class App extends Component {
  render() {
    return (
      <React.Fragment>
       {/* <StudentForm />
        <UserStateProps />
        <UserRegistration /> 
        <MyFunctions />*/}
        <UserData />

     </React.Fragment>
    );
  }
}

export default App;
