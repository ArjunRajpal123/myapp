import React from 'react';
import Projects from './projects';
import { ABOUT } from '../shared/aboutInfo';
import { BLANK } from '../shared/blank';
import AboutText from './AboutMe';
import './comp.css'



class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: ABOUT };
	}


	changeValue = () => {
		this.setState(
			{ text: " ", project: BLANK }
		);
	}

	changeValue2 = () => {
		this.setState(
			{ val: " ", project: ABOUT }
		);
	}

	render() {
		return (


			<div className='divSec2'>

				<AboutText project={this.state.project} />



			</div>
		);
	}
}


export default About;