// CourrierTable.js

import StarRating from './stars'; 
import courierData from './Courrier';
import React, { useEffect, useState } from 'react';
import '../style/courrier_data.css';
import leaderboardData from './LeaderBoard.json';

const CourrierTable = () => {
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

  }, []);

  return (
    <table>
      <tbody>
        {deliveryPartners.map((partner,index) => (
          <tr key={index}>
            <td>{partner.DeliveryPartnerName}</td>
            <td>{partner.Ranking}</td>
            <td>
              <StarRating rating={partner.Ranking} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourrierTable;
