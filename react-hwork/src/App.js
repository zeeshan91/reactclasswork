import React, { Component } from 'react';
import './App.css';
import StudentForm from './components/Form';
import StateProps from './components/StateProps';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <StudentForm /> */}
      <StateProps/>
     </React.Fragment>
    );
  }
}

export default App;
