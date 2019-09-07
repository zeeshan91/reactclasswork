import React, { Component } from 'react';
import './App.css';
import StudentForm from './Form'
import StateProps from './StateProps'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <StateProps/>
     </React.Fragment>
    );
  }
}

export default App;
