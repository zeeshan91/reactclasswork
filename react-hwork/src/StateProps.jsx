import React, { Component } from 'react';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)  
      this.state = {
         name:"zeeshan",
         email: "zeeshan.test@gmail.com",
         phone:"03467-454545454565",
         marksheet: { physics:100, maths: 78  , bio:  999  }
       };
    };
     

  render() {
    return (
      <div>
        <Login name={this.state.name} /> 
        <Login email={this.state.email} /> 
        <Login phone={this.state.phone} /> 
        <Marksheet marksheet={this.state.marksheet} />
      </div>
    ); 
  }
}

class Login extends Component {
  render() {
    return (
    <div>
    <h2>Login User</h2>  
    <h4>Name:   {this.props.name}</h4> 
    <h4>Email:  {this.props.email}</h4> 
    <h4>Phone: {this.props.phone}</h4> 
    </div>
    );
  }
}

class Marksheet extends Component {
    render() {
      return (
      <div>
          <h2>User Marksheet</h2>
          <h4> Physics:  {this.props.marksheet.physics}</h4> 
          <h4> Maths:  {this.props.marksheet.maths}</h4>  
          <h4> Bio:  {this.props.marksheet.bio}</h4>  
      </div>
      );
    }
  }
  

class Register extends Component {
  render() {
    return (
      <div> 
          <h2>Register User</h2>
      
     
     
      </div>
    );
  }
}
