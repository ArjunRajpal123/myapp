import React from 'react';
import './aboutme.css';

class AboutMe extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: " "};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "All the information about be appears below"}
			);
		}
	
	render(){
		return(
			<div className="aboutMeStyle">
				<h1>About Me</h1>
				    <button type="button" onClick={this.changeValue}>Read More</button>
                <h2> {this.state.val} </h2>
			</div>
		);
	}
}


export default AboutMe;