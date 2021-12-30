import React from 'react';
import './greet.css'

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: " "};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "to My Personal Website"}
			);
		}

	changeValue2 = () => {
		this.setState(
			{val: " "}
			);
		}
	
	render(){
		return(
			<div className='main'>
				<h1>Welcome {this.state.val} </h1>
				<button type="button" onClick={this.changeValue}>Expand</button>
				<button type="button" onClick={this.changeValue2}>Shrink</button>
			</div>
		);
	}
}


export default Greet;