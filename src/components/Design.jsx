import React from 'react';
import '../style/design.css' ;

const Design = () => {
    return (
        <div className="bottom">
            <div className="text">
                <h2>A Trusted Provider Of <br /> Courier Services</h2> 
                <p> We deliver your products safely to your  <br/>  home in a reasonable time.</p>
            </div>
            <div className="imgo">
                    <img src="Illustration@2x.png" alt="Courier Illustration" />
            </div>  
            <div className="content">
                <div className="imgo1">
                    <p> 26+ <br/> Awards Won </p>
                    <img src="LINE---COLOR.png" alt="Award Icon" />
                </div>
                <div className="imgo2">
                    <p> 65+ <br/> States Covered </p>
                    <img src="IconSpace_Map_24Px.png" alt="States Covered Icon" />
                </div>
                <div className="imgo3">
                    <p> 689k+ <br/> Happy Clients </p>
                    <img src="iconspace_Man_25px.png" alt="Happy Clients Icon" />
                </div>
                <div className="imgo4">
                    <p> 130M <br/> Goods Delivered </p>
                    <img src="iconspace_Cement Truck_25px.png" alt="Goods Delivered Icon" />
                </div>
                <div className="imgo5">
                    <p> 130M <br/> Business Hours </p>
                    <img src="iconspace_Cement Truck_25px.png" alt="Business Hours Icon" />
                </div>          
            </div> 
                
        </div>
    );
}

export default Design;
