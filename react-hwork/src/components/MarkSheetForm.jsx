import React, {Component} from 'react';
import { thisExpression } from '@babel/types';

class MarkSheetForm extends Component{
    constructor(props){
    super(props)
    console.log(props);

    this.state = {
        name:"",
        email:"",
        subjectmarks:[]
    }
   
    }

    FormClick(e) {
       // alert('Work');
       e.preventDefault();
      //  console.log(e);
        
    
    
    };


    

    render(){ 
        return(
                <div className="">
                        <h2>Student Result Calculator</h2>
                 <form  onClick={this.FormClick}>

                    <label>Name</label>
                    <input type="text" onChange={e=>{ this.setState({ name: e.target.value }) }} value={this.state.value} name="fname" placeholder="Name" /> <br />
                    <label>Email</label>
                    <input type="email" onChange={e=>{ this.setState({ email: e.target.value }) }} value={this.state.value}  name="email" value={this.state.value}  placeholder="Email" /> <br />
                    <label>Subjects Marks</label>
                    <input type="number" onChange={e=>{ this.setState({ subjectmarks: e.target.value }) }} value={this.state.value}  name="email" value={this.state.value}  placeholder="Subjects  Marks" /> <br />
                    <button>Calculate</button>

                </form>


                </div>

        );
    }
} 
export default MarkSheetForm;