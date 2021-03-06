import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';
import { COURSE } from '../shared/course';
import { FaArrowUp, FaArrowDown, FaUps } from 'react-icons/fa';
import CourseList from './courseList';

class CourseWork extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: COURSE, isUp:false };
	}




	wrapperFunk = () => {
		if(!this.state.isUp){
			this.setState(
				{ val: " ", project: BLANK, isUp:true }
			);
		}else{
			this.setState(
				{ text: "Input Info About Me Here", project: COURSE, isUp:false }
			);
		}
	}

	render() {
		return (
			<div className='divBoarder'>
				<div className='divSec2'>
					<div className='divSec3'>
						<div className='titleText'>
							<h2>Education</h2>
						</div>
						<button className="buttonStyle" onClick={this.wrapperFunk}>
							{this.state.isUp ? <FaArrowDown /> : <FaArrowUp />}
						</button>
					</div>


					<CourseList project={this.state.project} />


				</div>
			</div>


		);
	}
}


export default CourseWork;