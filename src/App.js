import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import AboutMe from './components/AboutMe';
import Greet from './components/greet';
import Calendar from 'react-calendar';
import Zoom from 'react-reveal/Zoom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: PLACES
    };
  }



  render() {
    return (
      <div>
        <Navbar id="title">
          <div className="container" id="brand">
            <NavbarBrand>Arjun's Personal Website</NavbarBrand>
          </div>
        </Navbar>

        <div className='bar'>

          <div className='container' id="subtabStyle">
            <Greet />
          </div>

          <div className='App'>

            <div className='container' id='calStyle'>
            
              <Zoom>
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
                <Calendar />
              </Zoom>
              
            </div>

          </div>


          <div className='container' id="subtabStyle">
            <AboutMe />
          </div>

        </div>



      </div>



    );


  }
}

export default App;