import React from 'react';
import Projects from './projects';
import { ABOUT } from '../shared/aboutInfo';
import { BLANK } from '../shared/blank';
import AboutText from './AboutMe';
import './comp.css'



class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: ABOUT, isUp:true };
	}


	changeValue = () => {
		this.setState(
			{ text: " ", project: BLANK, isUp:true }
		);
	}

	changeValue2 = () => {
		this.setState(
			{ val: " ", project: ABOUT, isUp:false }
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