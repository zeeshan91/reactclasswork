import React, {Component} from 'react';

class UserRegistration extends Component{

    state = {
        name:"",
        companyname:"",
        email:"",        
        password:"",
        country:"",
        
    }

    UserRegSubmit = e =>{
        e.prventDefault();
        alert('User Register');
        console.log('user');

    };

    render(){
    return(

            <div className="container">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                    <h2>User Registration Form</h2>
  <form onSubmit={this.UserRegSubmit}>
  <div className="form-group">
      <label for="name">Name</label>
      <input type="text" onChange={e=>{ this.setState({ name: e.target.value   }); }}
      required="required" className="form-control" id="name" placeholder="Enter your name" name="name" />
    </div>

    
    <div className="form-group">
      <label for="companyname">Company Name:</label>
      <input   required="required"  type="text"  onChange={e=>{ this.setState({ companyname: e.target.value   }); }}      
      className="form-control" id="companyname" placeholder="Company Name" name="companyname" />
    </div>
     
  
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email"  onChange={e=>{ this.setState({ email: e.target.value   }); }}
                 required="required"            className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    
    <div className="form-group">
      <label for="password">Password:</label>
      <input type="password"  onChange={e=>{ this.setState({ tel: e.target.value   }); }}
                   required="required"         className="form-control" id="password" placeholder="Enter Password" name="password" />
    </div>
    

    <div className="form-group">
      <label for="country">country:</label>
      <select onChange={e=>{ this.setState({ country: e.target.value   }); }} required="required" className="form-control" id="country"  name="country">
        <option value="pakistan">Pakistan</option>
        <option value="china">China</option>        
      </select>
    </div>
    


   
      
     <button type="submit" className="btn btn-default btn-lg">Submit</button>
  </form>
  

  </div>

            </div>

            );
    }
}


export default UserRegistration;