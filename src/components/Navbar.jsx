import React, { useState } from 'react';
import '../style/navbar.css';
import logo from '../images/landingPageImgs/Logo_p.png'
import profileImage from '../images/landingPageImgs/profileImage.png'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
              {isLoggedIn ? (
                <li> <a href="##"><img src={profileImage} alt="Profile"/></a> </li>
              ) : (
                <li> <a href="/login">Login / SingUp</a> </li>
              )}
            </ul>
          </div> 
        </div>
    </nav>
  );
};

export default Navbar;