import React from 'react';
import '../style/design.css' ;

import img1 from '../images/landingPageImgs/Illustration@2x.png';
import img2 from '../images/landingPageImgs/LINE---COLOR.png';
import img3 from '../images/landingPageImgs/IconSpace_Map_24Px.png';
import img4 from '../images/landingPageImgs/iconspace_Man_25px.png';
import img5 from '../images/landingPageImgs/iconspace_Cement Truck_25px.png';
import img6 from '../images/landingPageImgs/iconspace_Business Bag_25px.png';

const Design = () => {
    return (
        <div className="bottom">
            <div className="text">
                <h2>A Trusted Provider Of <br /> Courier Services</h2> 
                <p> We deliver your products safely to your  <br/>  home in a reasonable time.</p>
            </div>
            <div className="imgo">
                    <img src={img1} alt="Courier Illustration" />
            </div>  
            <div className="content">
                <div className="imgo1">
                    <p> 26+ <br/> Awards Won </p>
                    <img src={img2} alt="Award Icon" />
                </div>
                <div className="imgo2">
                    <p> 65+ <br/> States Covered </p>
                    <img src={img3} alt="States Covered Icon" />
                </div>
                <div className="imgo3">
                    <p> 689k+ <br/> Happy Clients </p>
                    <img src={img4} alt="Happy Clients Icon" />
                </div>
                <div className="imgo4">
                    <p> 130M <br/> Goods Delivered </p>
                    <img src={img5} alt="Goods Delivered Icon" />
                </div>
                <div className="imgo5">
                    <p> 130M <br/> Business Hours </p>
                    <img src={img6} alt="Business Hours Icon" />
                </div>          
            </div> 
        </div>
    );
}
export default Design;
