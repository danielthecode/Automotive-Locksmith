import React from 'react';
import "./services.scss";
import image1 from "../../images/lost_keys/image1.jpg";
import image2 from "../../images/lost_keys/image2.jpg";
import Accordion from '../Accordion/Accordion';


const Services = () => {


  return <div id='services' className="container-service">

        <div className="services_svg"></div>
        <div className="heading"><h2>Services</h2></div>

        <div className="wrapper">
          <Accordion title="Lost or Stolen Keys" description1=" In the unfortunate event of your vehicle key being lost or stolen, Car Key Experts can help you replace
                the key without any damage to your vehicle" 
                description2 = "Our highly skilled technicians will perform an ‘All Keys Lost’ function using our specialist equipment to ensure that all registered keys are erased from the vehicle memory and no longer recognised by the vehicle’s immobiliser system. We will then cut and programme a new key for you to restore your vehicle to full functionality. All of this is done at a fraction of what you would be charged by a dealership - whilst we also come to you, much to your convenience."
                image1= {image1} image2={image2}
                />

          <Accordion title="Key Repair" wrapperStyle = "reverse" styleName="uncolored " description1="Broken or damaged key blade? 
Worn out buttons on key fob? 
Remote central locking issues?
Flimsy key shell case? 
Car Key Experts have you covered! 
"
                description2 = "We have come across all types of damaged keys over time. Whatever this issue is, Car Key Experts are equipped to provide a solution for any key issue."
                image1= {image1} image2={image2} />

          <Accordion title="Spare Key" description1="Just bought a vehicle and 
only have the one key?
Car Key Experts will come 
and provide with a spare key 
in no time!" 
                description2 = {`Perhaps you currently have a manual blade key and you need a remote key for more convenience?
                Having a spare key is a wise choice, especially if you ever lose your key or you have more than one person who drives the vehicle. The process for making a spare key is very simple - we use your existing key and duplicate it using our specialist equipment. 
                `}
                image1= {image1} image2={image2} />

          <Accordion title="Vehicle Lockout"  styleName="uncolored" description1="Car Key Experts can help you 
regain entry into your vehicle
without causing any damage." wrapperStyle = "reverse"
                description2 = "Surprisingly, it is relatively common for vehicle owners to leave their keys in the vehicle – ultimately locking them out. We utilise a range of tools and equipment in order to safely and efficiently gain non-destructive entry into your vehicle."
                image1= {image1} image2={image2} />

          <Accordion title="Key Cutting" description1="Our state-of-the-art equipment can 
cut a new key for vehicles of any age, 
make or model.
" 
                description2 = "Car Key Experts also offer programming services for key fobs and keyless entry systems."
                image1= {image1} image2={image2} />

          <Accordion title="Key programminng"  styleName="uncolored" description1="As every vehicle has a unique identification code 
in its ignition barrel, vehicle key programming is 
required to ensure communication between the 
key and the vehicle is corresponding. Without these 
matching identification codes, your vehicle will not start.
" wrapperStyle = "reverse"
                description2 = "Our highly skilled technicians will perform an ‘All Keys Lost’ function using our specialist equipment to ensure that all registered keys are erased from the vehicle memory and no longer recognised by the vehicle’s immobiliser system. We will then cut and programme a new key for you to restore your vehicle to full functionality. All of this is done at a fraction of what you would be charged by a dealership - whilst we also come to you, much to your convenience."
                image1= {image1} image2={image2} />      
          {/* <div className="wrapper-content first">
            <div className="left">
              <div className="title">Lost Or Stolen Keys</div>
              <div className="description">
                <p >
                In the unfortunate event of your vehicle key being lost or stolen, Car Key Experts can help you replace
                the key without any damage to your vehicle.
                <br />
                <p className={expandOpen1 ? 'hidden' : 'visible'}>
                  Our highly skilled technicians will perform an ‘All Keys Lost’ function using our specialist equipment
                  to ensure that all registered keys are erased from the vehicle memory and no longer recognised by the
                  vehicle’s immobiliser system. We will then cut and programme a new key for you to restore your vehicle
                  to full functionality. All of this is done at a fraction of what you would be charged by a dealership
                  - whilst we also come to you, much to your convenience
                </p>
                </p>
              </div>
              <div className="extend">
                <div className="btn-readmore" id='readmore' onClick={expand1}>Read More</div>
              </div>
              
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={image1} className="img-fluid" alt="" />
              </div>
              <div className="img-wrapper">
              <img src={image2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="wrapper-content reverse">
            <div className="left">
              <div className="title">KEY REPAIR</div>
              <div className="description">
                <p className='visible'>
                  Broken or damaged key blade?
                  Worn out buttons on key fob?
                  Remote central locking issues?
                  Flimsy key shell case?
                  Car Key Experts have you covered!

                  <br />
                <p className='more'>
                We have come across all types of damaged keys over time.
                 Whatever this issue is, Car Key Experts are equipped to provide a solution for any key issue.
                </p>
                </p>
              </div>
              <div className="extend">
                <div className="btn-readmore" onClick="{expand}">Read More</div>
              </div>
              
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={image1} className="img-fluid" alt="" />
              </div>
              <div className="img-wrapper">
              <img src={image2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="wrapper-content">
            <div className="left">
              <div className="title">SPARE KEY</div>
              <div className="description">
                <p className='visible'>
                  Just bought a vehicle and 
                  only have the one key?
                  Car Key Experts will come 
                  and provide with a spare key 
                  in no time! 

                <br />
                <p className='more'>
                  Perhaps you currently have a manual blade key and you need a remote key for more convenience?
                  Having a spare key is a wise choice, especially if you ever lose your key or you have more than one
                  person who drives the vehicle. The process for making a spare key is very simple - we use your
                  existing key and duplicate it using our specialist equipment.

                </p>
                </p>
              </div>
              <div className="extend">
                <div className="btn-readmore" onClick="{expand}">Read More</div>
              </div>
              
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={image1} className="img-fluid" alt="" />
              </div>
              <div className="img-wrapper">
              <img src={image2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="wrapper-content reverse">
            <div className="left">
              <div className="title">VEHICLE LOCKOUT</div>
              <div className="description">
                <p className='visible'>
                  Car Key Experts can help you
                  regain entry into your vehicle
                  without causing any damage.

                <br />
                <p className='more'>
                  Surprisingly, it is relatively common for vehicle owners to leave their keys in the vehicle –
                  ultimately locking them out. We utilise a range of tools and equipment in order to safely and
                  efficiently gain non-destructive entry into your vehicle.
                </p>
                </p>
              </div>
              <div className="extend">
                <div className="btn-readmore" onClick="{expand}">Read More</div>
              </div>
              
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={image1} className="img-fluid" alt="" />
              </div>
              <div className="img-wrapper">
              <img src={image2} className="img-fluid" alt="" />
              </div>
            </div>
          </div> */}


        </div>
      </div>;
};

export default Services;
