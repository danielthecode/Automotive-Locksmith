import React, {useState} from 'react';
import { Link } from 'react-scroll';
import "./header.scss";
import hamburger_open from "../../images/hamburger_icon.svg";
import hamburger_close from "../../images/hamburger_close.svg";
import logo from "../../images/logo.png";
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';


const Header = () => {
  const [colourChange, setColourChange] = useState(false);
    const changeNavbarColour = () => {
        if(window.scrollY >=700){
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
                <div><img src={logo} className="logo_svg" alt="" /></div>
          </Link>
          <Link to="home" spy={true} smooth={true} onClick={close}>
            <div className="text">Automotive Locksmith</div>
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

          <div className="nav-socials">
          <div className="icon">
             <a href="https://instagram.com/carkeysandremotesuk?utm_medium=copy_link" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a>
            </div>
            <div className="icon">
            <a href="https://www.facebook.com/Car-Keys-Remotes-UK-100636342171376/" target="_blank" rel="noreferrer"><FaFacebook size={30}/></a>
            </div>
            <div className="icon">
            <a href="https://www.google.com/search?q=car+keys+and+remotes&oq=car+keys+and+re&aqs=chrome.0.0i355j46i175i199j69i57j0i457j0i22i30.11872j0j7&client=ms-android-google&sourceid=chrome-mobile&ie=UTF-8#lkt=LocalPoiReviews&trex=m_t:lcl_akp,rc_f:nav,rc_ludocids:7142101564104645412,rc_q:Car%2520Keys%2520%2526%2520Remotes,ru_q:Car%2520Keys%2520%2526%2520Remotes,trex_id:CcDknf" target="_blank" rel="noreferrer"><FaGoogle size={30}/></a>
            </div>
          </div>
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
