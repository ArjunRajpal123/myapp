import React from 'react';
import { Media } from 'reactstrap';
import { PLACES } from '../shared/places';
import Zoom from 'react-reveal/Zoom';


class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const proj = this.props.project.map((project) => {
            return (
                <div key={project.id} id="unit" className="aboutMeStyle2">
                    <Media tag="li">
                    
                        <Media left>
                            <Media object src={project.image} alt={project.name} />
                        </Media>
                        
                        <Media body className="aboutStyle2">
                            <Zoom>
                                <div className='titleText2'>
                                <Media heading><strong><h2 className='titleText2'>{project.name}</h2></strong></Media>
                                <div>    </div>
                                <div><strong></strong>{project.category}</div>
                                <div><strong> </strong><h4>{project.description}</h4></div>
                                <div> </div>
                                </div>
                                <li></li>
                                
                            </Zoom>
                        </Media>

                    </Media>
                    
                    
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {proj}
                    </Media>
                </div>
            </div>
        );
    }
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Projects;