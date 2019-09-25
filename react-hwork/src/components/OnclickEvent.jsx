import React, { Component } from 'react';


class ToggleClick extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			changeText :  "Welcome Zeeshan",	
			changeText1 : "Hello Zeeshan",	
			changeText2 : "Hello World"	
		}			
		this.handleClick = this.handleClick.bind(this);	
	}
	handleClick = (e) => {
		e.preventDefault();
	const id = e.target.id;
    //alert(id);
	this.setState({ changeText: 'Hello Zeeshan' , changeText1 : "Hello Zeeshan 1" , changeText2 : "Hello Zeeshan 3" })
	} 
	 
	render(){
		return(
			<div>
			<h2>Bind Event</h2>
					<button id="btn1" onClick={this.handleClick}>Click</button>
					<h4>{this.state.changeText}</h4>
			</div>
		);
	}
}

export default ToggleClick;