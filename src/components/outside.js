import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';
import Button from './cleanButton';
import { FaArrowUp, FaArrowDown, FaUps } from 'react-icons/fa';


class Outside extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: PROJ, Media: "HI", isCardView: false };
	}


	changeValue = () => {

	}

	changeValue2 = () => {
		this.setState(
			{ val: " ", project: BLANK, isCardView: true }
		);
	}

	wrapperFunk = () => {
		if (!this.state.isCardView) {
			this.setState(
				{ project: BLANK, isCardView: true }
			);


		} else {
			this.setState(
				{ project: PROJ, isCardView: false }
			);

		}

	}

	render() {
		return (
			<div className='divBoarder'>
				<div className='divSec2'>
					<div className='titleText'>
						<h2>Highlighted Projects</h2>
					</div>



					<button className="buttonStyle" onClick={this.wrapperFunk}>
						{this.state.isCardView ? <FaArrowDown /> : <FaArrowUp />}
					</button>


					<Projects project={this.state.project} />


				</div>
			</div>
		);
	}
}


export default Outside;