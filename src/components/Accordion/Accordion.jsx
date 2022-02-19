import React, {useState, useRef} from 'react';
import "./accordion.scss";
import ServiceArrow from './Service_Arrow';

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState ("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccordion () {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate")
    }


  return <div className={`accordion_section ${props.styleName}`}>
      <div className={`accordion ${setActive}`} onClick={toggleAccordion} >
          <p className="accordion_title">{props.title}</p><span/>
          <ServiceArrow className={`${setRotate}`} width={10} fill={"black"} />
      </div>

      <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content">
          <div className={`wrapper-content ${props.wrapperStyle}`}>
            <div className="left">
              <div className="description">
                <p >
                {props.description1}
                
                </p>
                <br />
                <p className='second'>
                  {props.description2}
                </p>
              </div>
              
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={props.image1} className="img-fluid" alt="" />
              </div>
              <div className="img-wrapper">
              <img src={props.image2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

      </div>
  </div>;
};

export default Accordion;
