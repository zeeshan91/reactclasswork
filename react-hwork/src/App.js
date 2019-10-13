import React, { Component } from 'react';
import './App.css';
import StudentForm from './components/Form';
//import UserStateProps from './components/StateProps';
//import UserRegistration from './components/RegisterForm';
//import MyFunctions from './components/Functions';
//import UserData from './components/ApiData';
//import AnalogClock from './components/Clock';
//import IncDecNumber from './components/IncDecNumber';
import MarkSheetForm from './components/MarkSheetForm';
//import AddFields from './components/AddFields';
import SalesApp from './components/SalesApp';
 

class App extends Component {
   render() {


    var courses  = [        
      { name : 'React Native', price  :6000},
      { name : 'React JS', price  :6000},
      { name : 'Android ', price  :6000},
      { name : 'iOS Native', price  :6000},
  ]
    return (
      <React.Fragment>
       {/* <StudentForm />
        <UserStateProps />
        <UserRegistration /> 
        <MyFunctions />
        <UserData />
        <ToggleClick />
        <IncDecNumber />
        <AddFields />
        <SalesApp />
      */}
        
      <div>
      {/* <MarkSheetForm /> */}
      {/* <StudentForm /> */}
<div className="App"> 
<h1>Sales Course App</h1>
   <SalesApp  items ={courses}/>     
</div>
</div>  
      
     </React.Fragment>
    );
  }
}

export default App;
