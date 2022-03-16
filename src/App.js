import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { PLACES } from './shared/places';
import Zoom from 'react-reveal/Zoom';
import Work from './components/work';
import About from './components/about'
import Contact from './components/contact';

import { SocialIcon } from 'react-social-icons';
import Prog from './components/progLang';
import CourseWork from './components/coursework';
import Outside from './components/outside';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
      text: "",

    };
  }





  render() {
    return (
      <div className='app'>
        <Navbar id="title">
          <div className="container" id="brand">
            <NavbarBrand id="brand">Arjun Rajpal</NavbarBrand>
          </div>
        </Navbar>

        <div className='bar'>

          <div className='sideTab'>

            <Contact />
            <div className='container'>
              <SocialIcon url="http://www.linkedin.com/in/arjun-rajpal" />
              <SocialIcon url="https://github.com/ArjunRajpal123" />
            </div>

          </div>

          <div className='center'>

            <div className='centerBlock'>

              <div>
                <About />
                <Outside />
                <Prog />
                <CourseWork />
                <Work/>
              </div>

            </div>

          </div>

        </div>

      </div>

    );


  }
}

export default App;