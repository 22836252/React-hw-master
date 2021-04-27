import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";

import { Carousel } from 'react-bootstrap';
import Rooms from "./Components/Rooms"
import Contact from "./Components/contactus"
import 'bootstrap/dist/css/bootstrap.min.css';

import mainpage from "./images/mainpage.jpg"
import TwinRoom from "./images/TwinRoom.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main_content" style={{height: '800px'}}>
        <Carousel>
          <Carousel.Item>
            <img src={mainpage} alt="mainapge"/>
          </Carousel.Item>
          
          <Carousel.Item>
            <img src={TwinRoom} alt="TwinRoom" />
          </Carousel.Item>
        </Carousel>
        </div>
        <Section
          title="About us"
          subtitle={'123'}
          dark={false}
          id="section1"
        />
        <Rooms />
        <Contact />
      </div>
    );
  }
}

export default App;
