import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';

class About extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: " ", text: "", project: BLANK };
	}
	
	
	changeValue = () => {
		this.setState(
			{text: "Input Info About Me Here", project: PROJ}
			);
		}

	changeValue2 = () => {
		this.setState(
			{val: " ", project: BLANK}
			);
		}
	
	render(){
		return(
			<div>
				<h1>Who Am I</h1>
				<h6>{this.state.text}</h6>
				<Projects project={this.state.project}/>
				<button type="button" onClick={this.changeValue}>Expand</button>
				<button type="button" onClick={this.changeValue2}>Shrink</button>
			</div>
		);
	}
}


export default About;