import React from 'react';
import { PLACES } from '../shared/places';
import Menu from './menu';
import { BLANK } from '../shared/blank';

class Work extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", places: BLANK };
	}


	changeValue = () => {
		this.setState(
			{ text: "Here is all my work experience" }
		);
	}

	changeValue2 = () => {
		this.setState(
			{ val: " " }
		);
	}

	render() {
		return (
			<div className='divSec'>
				<h1>Work Experience </h1>
				<h6>{this.state.text}</h6>
				<Menu places={this.state.places} />
				<button type="button" onClick={this.changeValue} className='button'>+</button>
				<button type="button" onClick={this.changeValue2} className='button'>-</button>
			</div>
		);
	}
}


export default Work;