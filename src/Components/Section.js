import React from "react";
import aboutus from '../images/aboutus.jpg'

export default function Section({ id }) {
  return (
    <div>
      <div className="section-content" id={id}>
        <div style={{width: '50%'}}>
          <img src={aboutus} style={{height: '100%', }} alt="about us"/>
        </div>
        <div style={{padding:'100px', alignSelf: 'center'}}>
          <h1>About Us</h1>
          <h5>123456789</h5>
        </div>
      </div>
    </div>
  );
}
