import React, { Component } from 'react';
import './App.css';
//import StudentForm from './components/Form';
//import UserStateProps from './components/StateProps';
import UserRegistration from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       {/* <StudentForm />
        <UserStateProps /> */}
        <UserRegistration />
     </React.Fragment>
    );
  }
}

export default App;
