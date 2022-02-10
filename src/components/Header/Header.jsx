import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import hamburger_open from "../../images/hamburger_icon.svg"
import hamburger_close from "../../images/hamburger_close.svg"


const Header = () => {
  const [colourChange, setColourChange] = useState(false);
    const changeNavbarColour = () => {
        if(window.scrollY >=10){
            setColourChange(true)
        }
        else{
            setColourChange(false)
        }
    }
    window.addEventListener('scroll', changeNavbarColour)

    const [menuOpen, setMenuOpen] = useState(false)
    const  menuToggleHandler = () => {
      setMenuOpen((p) => !p)

      if (menuOpen === false) {

        document.body.style.overflow = "hidden"

      }
      else {
        document.body.style.overflow = "unset"
      }
    }
  return <div className={colourChange ? 'header colourChange' : 'header'}>
    <div className='container'>
      <nav>
        <div className="logo">
          <Link to="#">
          Automotive Locksmith
          </Link>
        </div>

        <ul className={menuOpen ? 'ul-items open' : 'ul-items' }>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>

        <div className="collapse">
          {menuOpen ? <img src={hamburger_close} alt="open menu" onClick={menuToggleHandler} /> :
          <img src={hamburger_open} alt="close menu" onClick={menuToggleHandler} />}
        </div>

      </nav>
    </div>
  </div>;
};

export default Header;
