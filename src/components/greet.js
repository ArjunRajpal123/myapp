import React from 'react';
import cButton from './cleanButton';
import './comp.css'

class Greet extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: " " };
	}




	changeValue = () => {
		this.setState(
			{ val: "to My Personal Website" }
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
				<h1>Welcome {this.state.val} </h1>
				<cButton name="hi" className='button' />
				<button type="button" onClick={this.changeValue} className='button'>+</button>
				<button type="button" onClick={this.changeValue2} className='button'>-</button>
			</div>
		);
	}
}


export default Greet;