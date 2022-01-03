import React from "react";

import { Media } from "reactstrap";
import './comp.css'
import { IconContext } from "react-icons"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"


const count = 0;


export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isCardView:true, count:0}
    }

    

    wrapFunc = () => {
        
        if(this.state.isCardView){
            this.setState(
                { isCardView: false}
            );
        }else{
            
            this.setState(
                { isCardView: true}
            );
        }
        
    }



    render() {

        return (
            <button className="buttonStyle" onClick={this.wrapFunc} >
                
            </button>
        );
    }

};