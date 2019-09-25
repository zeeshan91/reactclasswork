import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            uname:"",
            companyname:"",
            tel:"",
            email:"",
            password:""
        }
        this.RegSubmit = this.RegSubmit.bind(this);        
        this.fieldSubmit = this.fieldSubmit.bind(this);        
   }

   RegSubmit = e => {
    e.preventDefault();
       alert('User Details \n' +
        'Name: ' +  this.state.uname +' \n' + 
        'Company Name: ' +  this.state.companyname +' \n' + 
        'Telephone: ' +  this.state.tel +' \n' + 
        'Email: ' +  this.state.email +' \n' + 
        'Password: ' + this.state.password );

      e.target.reset(); 
   }

   fieldSubmit = e => {
        // console.log(e.target);
   this.setState({ [e.target.name] : e.target.value });
   
   }

  render() {
    return (
      <div> 
        <h1>User Registration</h1>

        <form onSubmit={this.RegSubmit}>  

            <label>Username
            <input type="text" name="uname" value={this.state.uname}  onChange={this.fieldSubmit} />
            </label>
            <br />
            <label>Company Name
            <input type="text" name="companyname" value={this.state.companyname}  onChange={this.fieldSubmit} />
            </label>
            <br />
            <label>Telephone
            <input type="tel" name="tel" value={this.state.tel}  onChange={this.fieldSubmit} />
            </label>
            <br />
            <label>Email
            <input type="text" name="email" value={this.state.email}  onChange={this.fieldSubmit} />
            </label>
            <br />
            <label>Password
            <input type="password" name="password" value={this.state.password}  onChange={this.fieldSubmit}  />
            </label>--
            <br />
            <input type="submit" value="Submit" />
    </form>

      </div>
    );
  }
}
