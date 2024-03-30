import React, { useEffect, useState } from 'react';
import '../style/leader.css';
import courierData from './Courrier';
import Rectangle1 from '../images/landingPageImgs/Rectangle4.png'
import Rectangle2 from '../images/landingPageImgs/Rectangle 2.png'
import Rectangle3 from '../images/landingPageImgs/Rectangle 3.png'
const Leader = () => {
  const [img1Name, setImg1Name] = useState('');
  const [img2Name, setImg2Name] = useState('');
  const [img3Name, setImg3Name] = useState('');

  useEffect(() => {
    const img1Courier = courierData.find((courier) => courier.rating < 3);
    const img2Courier = courierData.find((courier) => courier.rating === 5);
    const img3Courier = courierData.find((courier) => courier.rating >= 3 && courier.rating < 5);

    if (img1Courier) setImg1Name(img1Courier.name);
    if (img2Courier) setImg2Name(img2Courier.name);
    if (img3Courier) setImg3Name(img3Courier.name);
  }, []);

  return (
    <div className="container">
      <div className="img1">
        <img src={Rectangle1} alt="a" />
        <p>{img1Name}</p>
      </div>
      <div className="img2">
        <img src={Rectangle2} alt="b" />
        <p>{img2Name}</p>
      </div>
      <div className="img3">
        <img src={Rectangle3} alt="c" />
        <p>{img3Name}</p>
      </div>
    </div>
  );
};

export default Leader;
