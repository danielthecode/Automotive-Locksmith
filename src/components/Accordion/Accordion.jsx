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
          <div className="accordion_text" dangerouslySetInnerHTML={{ __html: props.content}}/>
      </div>
  </div>;
};

export default Accordion;
