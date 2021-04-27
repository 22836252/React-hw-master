import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Button from '@material-ui/core/Button';
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
        <Button variant="contained" color="primary">
      你好，世界
    </Button>
    <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>

    <div>
        message: {this.props.message}
        <Button onClick={this.props.onClickSubmit}>Submit</Button>
      </div >
      </div>
      
    );
  }
}

export default App;
