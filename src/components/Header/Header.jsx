import React, {useState} from 'react';
import { Link } from 'react-scroll';
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
    }

    const close = () => {
      if (menuOpen === true) {
          setMenuOpen(false)
      }
      else {
        setMenuOpen(false)
      }
    }
  return <div className={colourChange ? 'header colourChange' : 'header'}>
    <div className='container'>
      <nav>
        <div className="logo">
          <Link to="home" spy={true} smooth={true} onClick={close}>
          Automotive Locksmith
          </Link>
        </div>

        <ul className={menuOpen ? 'ul-items open' : 'ul-items' }>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} onClick={close}>Home</Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} onClick={close}>Services</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} onClick={close}>About</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} onClick={close}>Contact Us</Link>
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
