import React, {Component} from 'react';

class IncDecNumber extends Component{
    constructor(props){
        super(props)
        this.state = {
            number : 0
        }
     this.Increment = this.Increment.bind(this)
     this.Decrement = this.Decrement.bind(this)
    }
    
    Increment () {
        this.setState( { number: this.state.number + 1 } )   
    } 
    
    Decrement () {
        this.setState( { number: this.state.number - 1 } )   
    } 
    render(){
        return(

            <div>
                <h2> Increment Decrement Counter </h2>

                 <h4>{this.state.number}</h4>
               <a href="javascript:;" onClick={this.Increment}> Increment </a>
               <a href="javascript:;" onClick={this.Decrement}> Decrement </a>

         </div>

        
        );

    }
}

export default  IncDecNumber;