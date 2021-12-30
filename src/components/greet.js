import React from 'react';

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
	
	render(){
		return(
			<div>
				<h1>Welcome {this.state.val} </h1>
				<button type="button" onClick={this.changeValue}>Update State</button>
			</div>
		);
	}
}


export default Greet;