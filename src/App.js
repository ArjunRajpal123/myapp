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
import Work from './components/work';
import About from './components/about'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import CalendarAppointment from './components/scheduler';
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
      text: "",
     
    };
  }


  

    getCurrentDate(separator=''){

      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      
      return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
      }


  render() {
    return (
      <div>
        <Navbar id="title">
          <div className="container" id="brand">
            <NavbarBrand id="brand">Arjun's Personal Website</NavbarBrand>
          </div>
        </Navbar>

        <div className='bar'>

          <div className='sideTab'>
            <Greet />
            <div className='container'>
              <SocialIcon url="https://instagram.com/notarjunr" />
              <SocialIcon url="http://www.linkedin.com/in/arjun-rajpal"/>
              <SocialIcon url="https://github.com/ArjunRajpal123" />
            </div>
            
          </div>

          <div className='center'>

            <div className='centerBlock'>
            
              <Zoom>
              <Greet />
              <About/>
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Greet />
              <Work/>
              
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