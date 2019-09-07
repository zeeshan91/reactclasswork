import React, { Component } from 'react';
 
export default class StudentForm extends Component {
  
 
    state = {
        name:"" ,
        email:"",
        tel:"" ,
        address:"",
        msg:"",
        upimage:null,
        data:[]
    }

    Stsubmit = e =>{
        var form = e.target;

        e.preventDefault();
        this.state.data.push({
            name:this.state.name,
            email:this.state.email,
            tel:this.state.tel ,
            address:this.state.address ,
            msg:this.state.msg
        });

     this.setState(this.state);

     form.reset();

         //   console.log(e);
        //    alert('Form is Working');

    };


  render() {
    return (
     
<div className="container studenform" onSubmit={this.Stsubmit}>
  <h2>Student Application Form</h2>
  <form>
  <div className="form-group">
      <label for="name">Name</label>
      <input type="text"  onChange={e=>{ this.setState({ name: e.target.value   }); }} 
                    required="required"        className="form-control" id="email" placeholder="Enter your name" name="name" />
    </div>
  
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email"  onChange={e=>{ this.setState({ email: e.target.value   }); }}
                 required="required"            className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    
    <div className="form-group">
      <label for="phno">Phone No:</label>
      <input type="tel"  onChange={e=>{ this.setState({ tel: e.target.value   }); }}
                   required="required"         className="form-control" id="phno" placeholder="Enter Phone No" name="tel" />
    </div>
    
    <div className="form-group">
      <label for="address">Address:</label>
      <input   required="required"  type="text" className="form-control" id="address" placeholder="Enter Address" name="address" />
    </div>
     
    <div className="form-group">
      <label for="description">Description:</label>
      <textarea   onChange={e=>{ this.setState({ msg: e.target.value   }); }} className="form-control" id="description" placeholder="Enter Description" name="description"></textarea>

    </div>
    <div className="form-group">
      <label for="description">Upload Image:</label>
      <input type="file" onChange={e=>{ this.setState({ upimage: e.target.value }); }} className="form-control"  name="upimage" />

    </div>
      
     <button type="submit" className="btn btn-default btn-lg">Submit</button>
  </form>


  <div>
            {this.state.data.map(item => (
                <div className="card">
                <div className="card-body">
                <img src="" className="card-img-top" alt="" />

                  <h5 className="card-title">{item.name} </h5>
                  <h5 className="card-title">{item.email} </h5>
                  <h5 className="card-title">{item.tel} </h5>
                  <h5 className="card-title">{item.address} </h5>
                  <p className="card-text"> {item.msg}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div> 
              </div>
         
             ))}
            </div>  

</div>

    );
  }
}





