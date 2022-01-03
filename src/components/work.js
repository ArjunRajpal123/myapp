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
			{ text: "I currently do not have any work experience but, I look forward to adding some soon." }
		);
	}

	changeValue2 = () => {
		this.setState(
			{ text: " " }
		);
	}

	render() {
		return (
			<div className='divBoarder'>
				<div className='divSec2'>
					<div className='divSec3'>
						<div className='titleText'>
							<h1>Work Experience </h1>
						</div>
						
					</div>
					<div className='buttonContainer'>
							<button type="button" onClick={this.changeValue} className='button'>+</button>
							<button type="button" onClick={this.changeValue2} className='button'>-</button>
						</div>
						<h6>{this.state.text}</h6>
					<Menu places={this.state.places} />

				</div>
			</div>
		);
	}
}


export default Work;