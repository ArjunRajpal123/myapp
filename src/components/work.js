import React from 'react';
import { PLACES } from '../shared/places';
import Menu from './menu';
import { BLANK } from '../shared/blank';
import { FaArrowUp, FaArrowDown, FaUps } from 'react-icons/fa';

class Work extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "No Software Engineering Experience", work: BLANK, isUp: false };
	}


	wrapperFunk = () => {
		if (!this.state.isUp) {
			this.setState(
				{ text: " ", work: BLANK, isUp: true }
			);
		} else {
			this.setState(
				{ text: "No Software Engineering Experience", work: BLANK, isUp: false }
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