import React, { useEffect } from 'react';
import "./services.scss";
import image1 from "../../images/lost_keys/image1.jpg";
import image2 from "../../images/lost_keys/image2.jpg";
import image3 from "../../images/key_repair/Picture3.jpg";
import image4 from "../../images/key_repair/Picture4.jpg";
import image5 from "../../images/spare_key/Picture5.jpg";
import image6 from "../../images/spare_key/Picture6.jpg";
import image7 from "../../images/vehicle-lockout/Picture7.jpg";
import image8 from "../../images/vehicle-lockout/Picture8.jpg";
import image9 from "../../images/key_cutting/Picture9.jpg";
import image10 from "../../images/key_cutting/Picture10.jpg";
import image11 from "../../images/key_programming/Picture11.jpg";
import image12 from "../../images/key_programming/Picture12.jpg";
import Accordion from '../Accordion/Accordion';
import Aos from 'aos';
import "aos/dist/aos.css";


const Services = () => {

  useEffect(() => {
    Aos.init({duration:2000, once:true});
  })


  return <div id='services' className="container-service">
    
        <div className="services_svg"></div>
        <div className="heading" data-aos="fade-up">
          <h2>Services</h2>
        </div>

        <div className="wrapper">
          <Accordion title="Lost or Stolen Keys" description1=" In the unfortunate event of your vehicle key being lost or stolen, Car Key Experts can help you replace
                the key without any damage to your vehicle"
            description2="Our highly skilled technicians will perform an ‘All Keys Lost’ function using our specialist equipment to ensure that all registered keys are erased from the vehicle memory and no longer recognised by the vehicle’s immobiliser system. We will then cut and programme a new key for you to restore your vehicle to full functionality. All of this is done at a fraction of what you would be charged by a dealership - whilst we also come to you, much to your convenience."
            image1={image1} image2={image2} />

          <Accordion title="Key Repair" wrapperStyle="reverse" styleName="uncolored " description1="Broken or damaged key blade? 
            Worn out buttons on key fob? 
            Remote central locking issues?
            Flimsy key shell case? 
            Car Key Experts have you covered!" 
            description2="We have come across all types of damaged keys over time. Whatever this issue is, Car Key Experts are equipped to provide a solution for any key issue."
            image1={image3} image2={image4} />

          <Accordion title="Spare Key" description1="Just bought a vehicle and 
            only have the one key?
            Car Key Experts will come 
            and provide with a spare key in no time!"
             description2={`Perhaps you currently have a manual blade key and you need a remote key for more
            convenience? Having a spare key is a wise choice, especially if you ever lose your key or you have more than
            one person who drives the vehicle. The process for making a spare key is very simple - we use your existing
            key and duplicate it using our specialist equipment. `} image1={image5} image2={image6} />

          <Accordion title="Vehicle Lockout" styleName="uncolored" description1="Car Key Experts can help you 
            regain entry into your vehicle without causing any damage." wrapperStyle="reverse"
            description2="Surprisingly, it is relatively common for vehicle owners to leave their keys in the vehicle – ultimately locking them out. We utilise a range of tools and equipment in order to safely and efficiently gain non-destructive entry into your vehicle."
            image1={image7} image2={image8} />

          <Accordion title="Key Cutting" description1="Our state-of-the-art equipment can 
            cut a new key for vehicles of any age, 
            make or model." 
            description2="Car Key Experts also offer programming services for key fobs and keyless entry systems."
            image1={image9} image2={image10} />

          <Accordion title="Key programminng" styleName="uncolored" description1="As every vehicle has a unique identification code 
            in its ignition barrel, vehicle key programming is 
            required to ensure communication between the 
            key and the vehicle is corresponding. Without these 
            matching identification codes, your vehicle will not start.
            " wrapperStyle="reverse"
            description2="Common reasons for vehicle key programming:"
            image1={image11} image2={image12} />
        </div>
      </div>;
};

export default Services;
