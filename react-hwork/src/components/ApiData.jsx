import React, {Component} from 'react';

class ApiData extends Component{
    constructor(props){
        super(props)
            this.state = {
                contactusr:[]   
            }
    }
    componentDidMount(){
        fetch('http://dummy.restapiexample.com/api/v1/employees').then(res=> res.json())
        .then((data) => {
            this.setState({ contactusr: data })
        })   
       .catch(console.log)

    } 

    render(){
            const stylelist = {
                title:{
                    margin:'20px 20px 40px',
                    fontSize: '50px',
                },
                estyleLine: {
                    borderBottom:'1px solid #ddd' ,
                    marginBottom: '20px',   
                    paddingBottom: '20px',   
                    width: '16.66%',
                    float:'left',
                    minHeight: '150px',
                }    
            }
                     return (
                    <div>
                        <h1 style={stylelist.title}>Employee List</h1>

                        <ul>
                        {this.state.contactusr.map(item => (
                        <li style={stylelist.estyleLine} key={item.id}>
                            <b>Employee Id:</b>  {item.id}
                            <br />
                            <b>Employee Name:</b>  {item.employee_name}
                            <br />
                            <b>Employee Age:</b> {item.employee_age}
                            <br />
                            <b>Employee Salary:</b>   {item.employee_salary}
                        </li>
                        ))}
                    </ul>     
                    </div>  
                    
            );
            
            
    }


    
}
export default ApiData;


