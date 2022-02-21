import React from 'react';
import "./contact.scss";

const Contact = () => {
  return (
    <div id='contact' className="container-contact">
        <div className="contact_svg"></div>
        <div className="heading"><h2>Contact</h2></div>

        <div className="contact-wrapper">
            <div className="lead">
                Get in touch
            </div>
            <div className="contact-content">
                <div className="location"><iframe  title='lls' frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=london+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div className="open">
                    <div className="text">
                        LOST YOUR VEHICLE KEY? DON’T PANIC and reachout to us
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact