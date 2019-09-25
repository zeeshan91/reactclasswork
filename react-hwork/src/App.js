import React, { Component } from 'react';
import './App.css';
//import StudentForm from './components/Form';
//import UserStateProps from './components/StateProps';
//import UserRegistration from './components/RegisterForm';
//import MyFunctions from './components/Functions';
//import UserData from './components/ApiData';
//import AnalogClock from './components/Clock';
//import IncDecNumber from './components/IncDecNumber';
import MarkSheetForm from './components/MarkSheetForm';



class App extends Component {
  render() {
    return (
      <React.Fragment>
       {/* <StudentForm />
        <UserStateProps />
        <UserRegistration /> 
        <MyFunctions />
        <UserData />
        <ToggleClick />
         <IncDecNumber />
        */}
        <MarkSheetForm />
        
        

     </React.Fragment>
    );
  }
}

export default App;
