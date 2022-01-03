import React from 'react';
import Projects from './projects';
import { PROJ } from '../shared/projects';
import { BLANK } from '../shared/blank';
import { FaArrowUp, FaArrowDown, FaUps } from 'react-icons/fa';


class Prog extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " ", text: "", project: BLANK, isUp:true };
	}

	wrapperFunk = () => {
		if(this.state.isUp){
			this.setState(
				{ val: " ", project: PROJ, isUp:false }
			);
		}else{
			this.setState(
				{ text: "Input Info About Me Here", project: BLANK, isUp:true }
			);
		}
	}

	render() {
		return (

			<div className='divBoarder'>
				<div className='divSec2'>

					<div className='divSec3'>

						<div className='titleText'>
							<h2>Skill Set</h2>
						</div>

						<button className="buttonStyle" onClick={this.wrapperFunk}>
							{this.state.isUp ? <FaArrowDown /> : <FaArrowUp />}
						</button>
					</div>



					<Projects project={this.state.project} />
				</div>

			</div>
		);
	}
}


export default Prog;