import React from 'react';
import { Media } from 'reactstrap';
import { PLACES } from '../shared/places';
import Zoom from 'react-reveal/Zoom';


class CourseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const proj = this.props.project.map((project) => {
            return (
                <div key={project.id} id="unit" className="aboutMeStyle2">

                    <Media tag="li">
                    
                        
                        
                            <Zoom>
                                <div className='titleText2'>
                                <Media heading><strong><h2 className='titleText3'>{project.name}</h2></strong></Media>
                                {/* <div>    </div>
                                <div><strong></strong>{project.category}</div>
                                <div><strong> </strong><h4>{project.description}</h4></div>
                                <div> </div> */}
                                </div>
                                
                                
                            </Zoom>
                 
                    </Media>
                    
                    
                </div>
            );
        });

        return (
            <div className="container">
                <div className="col">
                    <Media list>
                        {proj}
                    </Media>
                </div>
            </div>
        );
    }
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default CourseList;