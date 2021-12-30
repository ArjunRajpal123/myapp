import React from 'react';
import { PLACES } from '../shared/places';
import Menu from './menu';

class Work extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: " ", text: "", places: PLACES};
	}
	
	
	changeValue = () => {
		this.setState(
			{text: "Here is all my work experience"}
			);
		}

	changeValue2 = () => {
		this.setState(
			{val: " "}
			);
		}
	
	render(){
		return(
			<div>
				<h1>Work Experience </h1>
				<h6>{this.state.text}</h6>
				<Menu places={this.state.places}/>
				<button type="button" onClick={this.changeValue}>Expand</button>
				<button type="button" onClick={this.changeValue2}>Shrink</button>
			</div>
		);
	}
}


export default Work;