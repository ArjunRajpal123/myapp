import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';

class CourseWork extends React.Component {

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
			<div className='divBoarder'>
				<div className='divSec2'>
					<div className='divSec3'>
						<div className='titleText'>
							<h1>Education</h1>
						</div>
						<div className='buttonContainer'>
						<button type="button" onClick={this.changeValue} className='button'>+</button>
						<button type="button" onClick={this.changeValue2} className='button'>-</button>
					</div>
					</div>
					

					<Projects project={this.state.project} />
					

				</div>
			</div>


		);
	}
}


export default CourseWork;