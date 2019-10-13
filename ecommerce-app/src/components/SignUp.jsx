import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            name : "",
            email : "",
            password:"",
            error:""
        }   

        this.SignSubmit = this.SignSubmit.bind(this);
        this.fHandler = this.fHandler.bind(this);
    }

    SignSubmit(ev){
        ev.preventDefault();
        alert('Submit Form');

    }

    fHandler(ev){
        const target = ev.target;
        this.setState({ 
               [target.name] : target.value,
               error: target.validationMessage
 

         });
           console.log(ev.target.value) 

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
