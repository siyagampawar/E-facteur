import React, { useState, useEffect } from 'react';
import leaderboardData from './LeaderBoard.json';

const DeliveryPartnerList = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);

  useEffect(() => {
    // Your JSON data
    const data = leaderboardData;
  
    // Define the name of the city you want to sort by
    const cityNameToSortBy = "Mumbai";
  
    // Filter data for the given city
    const cityData = data.filter(partner => partner.CityName === cityNameToSortBy);
  
    // Sort the data based on "Ranking" in descending order
    const sortedData = cityData.sort((a, b) => b.Ranking - a.Ranking);
  
    // Update state with sorted data
    setDeliveryPartners(sortedData);
  }, []);
  

  return (
    <div>
      <h2>Delivery Partners Sorted by Ranking (Descending)</h2>
      <ul>
        {deliveryPartners.map((partner, index) => (
          <li key={index}>
            <strong>{partner.DeliveryPartnerName}</strong> - {partner.CityName} ({partner.Ranking})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryPartnerList;
