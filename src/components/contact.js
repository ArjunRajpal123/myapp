import React from 'react'
import './comp.css'

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            PersonalEmail: "Personal Email: arjunrajpal@outlook.com\n",
            SchoolEmail: "School Email:\n asr658@nyu.edu\n\n",
            Phone: "Mobile Phone:\n 425-435-3011"
        };
    }

    render() {
        return (
            <div className='compactSec'>
                <h1>Contact Info</h1>
                <div>
                <h8>{this.state.PersonalEmail}</h8>
                </div>
                <div>
                <h8>{this.state.SchoolEmail}</h8>
                </div>
                <div> <h8>{this.state.Phone}</h8> </div>
                
               
            </div>
        );
    }
}


export default Contact;