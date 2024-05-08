import React from 'react';
import '../style/landingPageHeader.css';
import Leader from './leader';

const Header = () => {
  return (
    <header>
      <div className="heading2">
        <span><br /></span>
        <span>
          Connecting Cities,<br />
          Delivering Smiles-<br />
          Your Preferred <br />
          Delivery Partner.
        </span>
      </div>
      < div className="heading1">
      <span><br /></span>
        <span>
          TOP DELIVERY<br/>
          HEROES....
        </span>
        <Leader/>
      </div>
    </header>
  );
};

export default Header;
