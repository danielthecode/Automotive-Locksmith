/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import "./hero.scss";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaRegClock} from "react-icons/fa";
import scroll from "../../images/scroll.svg";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll';

const Hero = () => {

  useEffect(() => {
    Aos.init({duration:2000, once:true});
  })

  return <div id='home'>
      <div className="socials">

          <div className="socials-wrapper" data-aos="fade-up">
            <div className="icon">
             <a href="https://instagram.com/carkeysandremotesuk?utm_medium=copy_link" target="_blank"><FaInstagram size={30}/></a>
            </div>
            <div className="icon">
            <a href="https://www.facebook.com/Car-Keys-Remotes-UK-100636342171376/" target="_blank" rel="noreferrer"><FaFacebook size={30}/></a>
            </div>
            <div className="icon">
            <a href="https://www.google.com/search?q=car+keys+and+remotes&oq=car+keys+and+re&aqs=chrome.0.0i355j46i175i199j69i57j0i457j0i22i30.11872j0j7&client=ms-android-google&sourceid=chrome-mobile&ie=UTF-8#lkt=LocalPoiReviews&trex=m_t:lcl_akp,rc_f:nav,rc_ludocids:7142101564104645412,rc_q:Car%2520Keys%2520%2526%2520Remotes,ru_q:Car%2520Keys%2520%2526%2520Remotes,trex_id:CcDknf" target="_blank"><FaGoogle size={30}/></a>
            </div>

            <div className="scroll">
              <img src={scroll} alt="" />
            </div>

          </div>

          
               
      </div>

      <div className="container-hero">

      <div className="content">
        <div className="main-intro" data-aos="fade-up">
          <h1 className='coloured'>LOST YOUR VEHICLE KEY?</h1>
          <h2>DON’T Stress, We can Help</h2>
        </div>

        <div className="sub-intro" data-aos="fade-up" data-aos-delay="1000">
          <div className="sub-into-1">
            <div className="sub-container">
            <a href="tel:07897718109" className='link'>
              <div className="wrapper">
                <span>
                  <FaPhone size={40} /></span>
              </div>
              <div className="text-1">
                Call Us Now on
              </div>
              <div className="text-2">
                07897718109
              </div>
              </a>
            </div>
          </div>

          <div className="sub-into-2">
            <div className="sub-container">
              <Link to="contact" spy={true} smooth={true}>
              <div className="wrapper">
                <span>
                  <FaRegClock size={40} /></span>
              </div>
              <div className="text-1">
                Opening Times
              </div>
              <div className="text-2">
                Mon - Sat 8:00 - 18:00
                <br />
                Sun - Closed
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="slogan" data-aos="fade-up" data-aos-delay="1000">
          <b>YOUR HOME FOR ALL CAR KEY SERVICES</b>
        </div>

        <div className="text-descriptions" data-aos="fade-right" data-aos-delay="1500">
          <div className="description-wrapper">
            <div className="description-item">
              <h3>✔ <span className='coloured'>Fast</span> and <span className='coloured'>Reliable</span> Mobile Service
              </h3>
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

            {/* <div className="left">
              <div className="left-container">
                  <div className="left-text-intro" data-aos="fade-up">
                      <h1 className='coloured'>LOST YOUR VEHICLE KEY?</h1>
                      <h2>DON’T Stress, Don't PANIC</h2>
                  </div>

                  <div className="sub-intro" data-aos="fade-up" data-aos-delay="1000">
                      <div className="sub-into-1">
                          <div className="sub-container">
                          <Link to="contact" spy={true} smooth={true}>
                              <div className="wrapper">
                              <span><FaPhone size={40}/></span>
                          </div>
                          <div className="text-1">
                              Call Us Now on
                          </div>
                          <div className="text-2">
                              07897718109
                          </div>
                          </Link>
                          </div>
                          
                      </div>

                      <div className="sub-into-2">
                          <div className="sub-container">
                          <Link to="contact" spy={true} smooth={true}>
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
                            </Link>
                          </div>    
                      </div>
                      
                  </div>
                  <div className="slogan" data-aos="fade-up" data-aos-delay="1000">
                      <b>YOUR HOME FOR ALL CAR KEY SERVICES</b>
                      </div>

                  <div className="left-text-descriptions" data-aos="fade-right" data-aos-delay="1500">
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
            <div className="right" data-aos="fade-left" data-aos-delay="500">
                <div className="hero-image-container">
                </div>
              
            </div> */}
        </div>
  </div>;
};

export default Hero;
