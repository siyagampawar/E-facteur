// CourrierTable.js

import React from 'react';
import StarRating from './stars'; 
import courierData from './Courrier';
import '../style/courrier_data.css';

const CourrierTable = () => {
  return (
    <table>
      <tbody>
        {courierData.map((courier) => (
          <tr key={courier.id}>
            <td>{courier.id}</td>
            <td>{courier.name}</td>
            <td>
              <StarRating rating={courier.rating} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourrierTable;
