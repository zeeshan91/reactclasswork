import React, { Component } from 'react';
import * as firebase from 'firebase';


export default class SignUp extends Component {
  constructor(props){
        super(props)
        this.state ={
          name : "",
          email : "",
          password:""
        }   
        
        this.SignSubmit = this.SignSubmit.bind(this);
        this.fHandler = this.fHandler.bind(this);
    }

  componentDidMount(){    

      // Set  Method with number id

      // firebase.database().ref('users').child('01').set({
      //     name:"Zeeshan Rafi",
      //     email:"zeeshan.rafi36@gmail.com"
      // })
    
      // Push Method with hash id

      // firebase.database().ref('users').push({
      //       name:"Zeeshan Rafi",
      //       email:"zeeshan.rafi36@gmail.com"
      // })
      
      // firebase.database().ref('users').on('value', snapshot => {
      // })


    // Update Node 

    // firebase.database().ref('users').child('01').update({
    //     email:"zeeshan.rafi361@gmail.com"
    // });

    // Remove node

   // firebase.database().ref('users').child('01').remove();



    }

    
  SignSubmit(ev){
      ev.preventDefault();
        var newLine = "\r\n";
       alert( this.state.name + " " + newLine + this.state.email + " " + newLine + this.state.password );
        
    
      firebase.database().ref('users').push({
            name:  this.state.name ,
            email:  this.state.email ,
            password: this.state.password
      })
       this.setState({ 
        name : "",
        email : "",
        password:""
         });
         
      //  this.props.handleData(this.state)
 
      }
      
      fHandler(ev){
        const target = ev.target;
        this.setState({ 
               [target.name] : target.value
          });
         //  console.log(ev.target.value) 

    }

  render() {
    return (
      <div> 

        <h1>SignUp</h1>
 
    <form onSubmit={this.SignSubmit} enctype="multipart/form-data">
            <label>
            Name
            <br />
            <input type="text" name="name" placeholder="Add Name"  value={this.state.name} onChange={this.fHandler}  />
            </label>
            <br />
            <br />
            <label>
            Email
            <br />
            <input type="text" name="email" value="" placeholder="Add Email Address"  value={this.state.email} onChange={this.fHandler}  />
            </label>
            <br />
            <br />
            <label>
            Password
            <br />
            <input type="password" name="password" placeholder="password"  value={this.state.password} onChange={this.fHandler} />
            </label>
            <br />
         
            <br />
            <input type="submit"  value="Submit" />
            
 </form>

  </div>
    );
  }
}
