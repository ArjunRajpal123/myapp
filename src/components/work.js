import React from 'react';
import { PLACES } from '../shared/places';
import Menu from './menu';
import { BLANK } from '../shared/blank';
import { FaArrowUp, FaArrowDown, FaUps } from 'react-icons/fa';

class Work extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", work: BLANK, isUp: true };
	}


	wrapperFunk = () => {
		if (this.state.isUp) {
			this.setState(
				{ val: " ", work: BLANK, isUp: false }
			);
		} else {
			this.setState(
				{ text: "Input Info About Me Here", work: BLANK, isUp: true }
			);
		}
	}

	render() {
		return (
			<div className='divBoarder'>
				<div className='divSec2'>
					<div className='divSec3'>
						<div className='titleText'>
							<h2>Work Experience </h2>
						</div>

					</div>
					<button className="buttonStyle" onClick={this.wrapperFunk}>
						{this.state.isUp ? <FaArrowDown /> : <FaArrowUp />}
					</button>
					<h6>{this.state.text}</h6>
					<Menu places={this.state.work} />

				</div>
			</div>
		);
	}
}


export default Work;