
import React, { Component } from 'react';
import Menu from './components/Menu';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Users from './components/Users';
import "./components/Firebase";
import * as  firebase from 'firebase';

class App extends Component {
  render(){

  return (
<div> 
     {/* <Menu /> 

      <div className="App">
      <h1>Home Page</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      
    */}

    <SignUp />
<Users />


     </div>
  );
}
}
export default App;
