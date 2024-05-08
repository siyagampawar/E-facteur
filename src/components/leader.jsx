
import React, { useEffect, useState } from 'react';
import '../style/leader.css';
import courierData from './Courrier';
import Rectangle1 from '../images/landingPageImgs/Rectangle4.png';
import Rectangle2 from '../images/landingPageImgs/Rectangle 2.png';
import Rectangle3 from '../images/landingPageImgs/Rectangle 3.png';
import leaderboardData from './LeaderBoard.json';

const Leader = () => {
  const [img1Name, setImg1Name] = useState('');
  const [img2Name, setImg2Name] = useState('');
  const [img3Name, setImg3Name] = useState('');
  const [img1Rank, setImg1Rank] = useState('');
  const [img2Rank, setImg2Rank] = useState('');
  const [img3Rank, setImg3Rank] = useState('');
  const [deliveryPartners, setDeliveryPartners] = useState([]);

  useEffect(() => {
    // Define the name of the city you want to sort by
    const cityNameToSortBy = "Nagpur";

    // Filter data for the given city
    const cityData = leaderboardData.filter(partner => partner.CityName === cityNameToSortBy);

    // Sort the data based on "Ranking" in descending order
    const sortedData = cityData.sort((a, b) => b.Ranking - a.Ranking);

    // Update state with sorted data
    setDeliveryPartners(sortedData);

    // Find the courier details for images
    const img1Courier = sortedData[0]
    const img2Courier = sortedData[1]
    const img3Courier = sortedData[2]

     setImg1Name(img1Courier.DeliveryPartnerName);
     setImg2Name(img2Courier.DeliveryPartnerName);
     setImg3Name(img3Courier.DeliveryPartnerName);

     setImg1Rank(img1Courier.Ranking);
     setImg2Rank(img2Courier.Ranking);
     setImg3Rank(img3Courier.Ranking);
  }, []);

  return (
    <div className="container">
      <div className="img1">
        <img src={Rectangle1} alt="b" />
        <p>{img3Name} <br></br>{img3Rank}</p>
      </div>
      <div className="img2">
        <img src={Rectangle2} alt="b" />
        <p>{img1Name} <br></br>{img1Rank}</p>
      </div>
      <div className="img3">
        <img src={Rectangle3} alt="c" />
        <p>{img2Name} <br></br>{img2Rank}</p>
      </div>
    </div>
  );
};

export default Leader;
