import React, {Component} from 'react'; 

class MarkSheetForm extends Component{
    constructor(props){
    super(props)
    
    this.state = {
        subjectname:"",
        subjectmarks:"",
        totaldata:[]
    }
     this.FormSubmit = this.FormSubmit.bind(this);
//     this.resetForm = this.resetForm.bind(this);
    }

    FormSubmit (e) {
        e.preventDefault();  
        this.state.totaldata.push({
                subjectname:this.state.subjectname,
                subjectmarks:this.state.subjectmarks
        });        
        e.target.reset();
        this.setState(this.state);
    };

  
    formStyles = {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table'
    }

render(){ 
    return(
                <div style={this.formStyles} className="cont">
                  <h2>Student Result Calculator</h2>
                 <form  onSubmit={this.FormSubmit}>
                    <label>Name</label> <br />
                    <input type="text" onChange={e=>{ this.setState({ subjectname: e.target.value }); }} value={this.state.value} name="subjectname" placeholder="Subject Name" /> <br />
                    <label>Marks</label> <br />
                    <input type="text" onChange={e=>{ this.setState({ subjectmarks: e.target.value }); }} value={this.state.value}  name="subjectmarks" value={this.state.value}  placeholder="Subject Marks" /> <br />
                    <br />
                    <button onClick={this.resetForm}>Calculate</button>
                </form>
           </div>

        );
    }
} 
export default MarkSheetForm;