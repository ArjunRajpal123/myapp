import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';

class Outside extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: BLANK };
	}


	changeValue = () => {
		this.setState(
			{ text: "Input Info About Me Here", project: PROJ }
		);
	}

	changeValue2 = () => {
		this.setState(
			{ val: " ", project: BLANK }
		);
	}

	render() {
		return (
			<div className='divSec'>
				<h1>Other Projects and Hobbies</h1>
				<h6>{this.state.text}</h6>
				<Projects project={this.state.project} />
				<button type="button" onClick={this.changeValue} className='button'>+</button>
				<button type="button" onClick={this.changeValue2} className='button'>-</button>
			</div>
		);
	}
}


export default Outside;