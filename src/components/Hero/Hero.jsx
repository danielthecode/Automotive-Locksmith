/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./hero.scss";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaRegClock} from "react-icons/fa";
import scroll from "../../images/scroll.svg";

const Hero = () => {
  return <div id='home'>
      <div className="socials">

          <div className="socials-wrapper">
            <div className="icon">
             <a href="http://www.instagram.com" target="_blank"><FaInstagram size={30}/></a>
            </div>
            <div className="icon">
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><FaFacebook size={30}/></a>
            </div>
            <div className="icon">
            <a href="http://www.instagram.com" target="_blank"><FaGoogle size={30}/></a>
            </div>

            <div className="scroll">
              <img src={scroll} alt="" />
            </div>

          </div>

          
               
      </div>

      <div className="container-hero">

      

            <div className="left">
              <div className="left-container">
                  <div className="left-text-intro">
                      <h1 className='coloured'>LOST YOUR VEHICLE KEY?</h1>
                      <h2>DON’T Stress, Don't PANIC</h2>
                  </div>

                  <div className="sub-intro">
                      <div className="sub-into-1">
                          <div className="sub-container">
                              <div className="wrapper">
                              <span><FaPhone size={40}/></span>
                          </div>
                          <div className="text-1">
                              Call Us Now on
                          </div>
                          <div className="text-2">
                              07897718109
                          </div>
                          </div>
                          
                      </div>

                      <div className="sub-into-2">
                          <div className="sub-container">
                              <div className="wrapper">
                                <span><FaRegClock size={40}/></span>
                              </div>
                              <div className="text-1">
                                Opening Times
                              </div>
                              <div className="text-2">
                                Mon - Sat 8:00 - 18:00
                                <br />
                                Sun - Closed
                              </div>
                          </div>
                              
                      </div>
                  </div>

                  <div className="left-text-descriptions">
                    <div className="description-wrapper">
                        <div className="description-item">
                            <h3>✔ <span className='coloured'>Fast</span> and <span className='coloured'>Reliable</span> Mobile Service</h3>
                        </div>
                        <div className="description-item">
                            <h3>✔ <span className='coloured'>Experienced</span> Technicians</h3>
                        </div>
                        <div className="description-item">
                            <h3>✔ <span className='coloured'>Competitive</span> Prices</h3>
                        </div>
                    </div>
                  </div>

              </div>


                

            </div>
            <div className="right">
                <div className="hero-image-container">
                </div>
              
            </div>
        </div>
  </div>;
};

export default Hero;
