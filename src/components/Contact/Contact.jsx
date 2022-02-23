import React from 'react';
import "./contact.scss";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import {FaRegClock} from "react-icons/fa";
import location from "../../images/locations.png"

const Contact = () => {
  return (
    <div id='contact' className="container-contact">
        <div className="contact_svg"></div>
        <div className="heading"><h2>Contact</h2></div>

        <div className="contact-wrapper">
            {/* <div className="lead">
                Get in touch
            </div> */}
            <div className="contact-content">
                <div className="location">
                    <img src={location} alt="" />
                </div>
                <div className="open">
                    <div className="text">
                        LOST YOUR VEHICLE KEY? DON’T PANIC and reachout to us
                    </div>
                    <div className="more-content">
                        <div className="email">
                            <div className="mail-text">
                            <a href="mailto:contact@carkeyexperts.co.uk" className='link'>
                                <span className="mail-icon"><img src={email} alt="" />
                                </span>
                                
                                contact@carkeyexperts.co.uk</a></div>
                        </div>
                        <div className="phone">
                            <div className="phone-text">
                                <a href="tel:07897718109" className='link'>
                                    <span className="phone-icon">
                                        <img src={phone} alt="" />
                                    </span>
                                    07897718109
                                </a>
                            </div>
                                
                        </div>

                        <div className="opening-times">
                            <div className="wrapper">
                                <span><FaRegClock size={24}/></span>
                            </div>
                            <div className="text-1">
                                Opening Times
                            </div>
                            <div className="text-2">
                                Mon - Sat 8:00 - 18:00
                                <div>Sun - Closed</div>
                                
                            </div>
                            <div className="text-3">Emergency situations (e.g., lost/stolen/broken keys or vehicle
                                lockouts) outside of opening hours can be attended to</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact