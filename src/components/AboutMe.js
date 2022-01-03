import React from 'react';
import { Media } from 'reactstrap';
import { PLACES } from '../shared/places';
import Zoom from 'react-reveal/Zoom';
import './comp.css'


class AboutText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const proj = this.props.project.map((project) => {
            return (
                <div key={project.id} id="unit" className="col-12 mt-5">
                    <Media tag="li">
                        <Media left>
                            <Media object src={project.image} alt={project.name} />
                        </Media>
                        <Media body className="ml-3">
                            <Zoom className='aboutMeStyle'>
                                
                                
                                <div className='aboutMeStyle2'><strong></strong>{project.description}</div>
                                
                            </Zoom>
                        </Media>

                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                
                    <Media list  >
                        {proj}
                    </Media>
                </div>
            </div>
        );
    }
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default AboutText;