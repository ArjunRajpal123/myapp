import React from "react";
import { Button } from "reactstrap";
import './comp.css'


class cButton extends React.Component {
    constructor() {
        super(this.props);
        this.state = { name: "hit" };
    }


    render() {
        return (

            <button type="button" className='button'>
                helloButton
            </button>


        );
    }

}

export default cButton;