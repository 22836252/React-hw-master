import React from "react";
import contact_us from "../images/contact_us.jpg"

export default function contact() {
    return (
        <div className="contact">
            <div ><img src={contact_us}  alt="contact us" /></div>
            <div className="contact_input" style={{ textAlign: 'center', paddingTop:'100px'}}>
                <div>Contact Us</div>
                <form>
                <input placeholder="Your Name" style={{ width: '100%' }} />
                <input placeholder="Your E-mail address" style={{ width: '100%' }} type="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" size="30"/>
                <input placeholder="Your Message" style={{ width: '100%', height:'200px' }} />
                <input type="submit" value="Send" style={{float: 'right'}}/>
                </form>
            </div>
        </div>
    );
}
