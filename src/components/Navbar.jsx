import React from 'react';
import '../style/navbar.css';
import logo from '../images/landingPageImgs/Logo_p.png'
import profileImage from '../images/landingPageImgs/profileImage.png'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="img"/>
          </div>
          <div className="elements">
            <ul>
              <li>HOME</li>
              <li>CONTACT US</li>
              <li>MY ORDER</li>
              <li> <a href="##"><img src={profileImage} alt=""/></a> </li>
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;