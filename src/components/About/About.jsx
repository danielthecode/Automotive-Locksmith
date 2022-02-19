import React from 'react';
import "./about.scss";
import aboutImage from "../../images/about/About.jpg"

const About = () => {
  return (
    <div id='about' className="container-about">
      <div className="about_svg"></div>
      <div className="heading">
        <h2>About</h2>
      </div>

      <div className="about-wrapper">
        <div className="left">
          <div className="about-text">
          <div className="about-text-title">Why do we exist?</div>
            <p>Car Key Experts is a mobile automotive locksmith service providing solutions for all vehicle key
              requirements.
              We are committed to providing our customers with honest, reliable, and excellent service.
              Based in the UK, we mainly cover areas in London, Kent, and Essex.</p>

          </div>
        </div>

        <div className="right">

          <div className="img-wrapper">
            <img src={aboutImage} alt="" />
          </div>


        </div>
      </div>

      <div className="about-content">
            <div className="text">
              <div className="about-content-title">Why Choose Car Key Experts?</div>
              <div className="about-content-desc">
              If you ever happen to be in the unfortunate situation of misplacing your vehicle key,
               main dealerships will often require you to take your vehicle to their premises (often, the vehicle must be towed to their location!) 
               and it sometimes takes several days or weeks before they order, 
               cut and programme a new key for your vehicle. We acknowledge this is tedious, 
               stressful, and pricey. We eliminate this process and come to you wherever your vehicle is located:
                at home, your place of work, by the roadside or anywhere across the regions we cover.
                 Furthermore, our prices are much more competitive compared to main dealerships and you get same-day service,
                  6 days a week.
              </div>

              <div className="grid">
                <div className="first">
                  <div className="caption">&bull; Fast and Reliable Service</div>
                  <div className="desc">Main dealers can take several days, while we can come to you same day</div>
                </div>
                <div className="second">
                  <div className="caption">&bull; Affordable Prices</div>
                  <div className="desc">Main dealerships charge higher prices</div>
                </div>
                <div className="third">
                  <div className="caption">&bull; Convenience</div>
                  <div className="desc">Main dealers require you to bring vehicle to them, whereas we come to you.</div>
                </div>
                <div className="fourth">
                  <div className="caption">&bull; Technicians</div>
                  <div className="desc">
                    We have a fleet of skilled locksmiths who have the knowledge and experience of dealing with any emergency situations.
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>

    
  )
}

export default About