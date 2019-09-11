import React, {Component} from 'react';

class MyFunctions extends Component {
    constructor(props){
        super(props);
    
     this.state = { Username (name){
        return  prompt("Please enter your name"+ name)
    }
}
}
    render(){
    
        return (
            <div> 
                    Welcome to {this.state.Username("name")}
                
                    <Function myName = {this.state.Username("name")} />
 
            </div>
            
        );
    }
}

class Function extends Component{

   render(){
        return (
                <div className="">
                    Pass parent function value to props :   {this.props.myName}
                

                </div>

        );


   }
}



export default MyFunctions;