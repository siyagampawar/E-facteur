import React, { useState } from 'react';
import '../style/user.css'
import calculatePincodeDistance from './method' ;

function User() {
  const [originPincode, setOriginPincode] = useState('');
  const [destination, setDestination] = useState('');
  const [country, setCountry] = useState('');
  const [originPincode1, setOriginPincode1] = useState('');
  const [destination1, setDestination1] = useState('');

  const handleSubmitDomestic = (event) => {
    event.preventDefault();
    const distance = calculatePincodeDistance(originPincode, destination);
    console.log('Distance (Domestic):', distance);
    // You can perform additional actions here, such as sending data to the backend
  };

  const handleSubmitInternational = (event) => {
    event.preventDefault();
    const distance = calculatePincodeDistance(originPincode1, destination1);
    console.log('Distance (International):', distance);
    // You can perform additional actions here, such as sending data to the backend
  };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here, you can send data to backend or perform any action you want
//     console.log('Submitted:', { originPincode, destination});
//   };
//   const handleSubmit1 = (event) => {
//     event.preventDefault();
//     // Handle form submission here, you can send data to backend or perform any action you want
//     console.log('Submitted:', { originPincode1, destination1, country });
//   };

  return (
    <div className='form'>
    <div className='Form1'>
    <form onSubmit={handleSubmitDomestic} >
     <div className='Domestic'>
        <h3 className='title'>Domestic</h3>
      <div>
        <br></br>
        <br></br>
        <label htmlFor="originPincode">OriginPincode:</label>
        <input
          type="text"
          id="originPincode"
          value={originPincode}
          onChange={(e) => setOriginPincode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button  className ="button" type="submit">Submit</button>
      </div>
      </form>
      <div className=' Form2'>
      <form onSubmit={handleSubmitInternational}>
      <div className='International'>
      <h1 className='title'>International</h1>
      <div>
        <br></br>
        <br></br>
        <label htmlFor="country">CountryName:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="originPincode">OriginPincode:</label>
        <input
          type="text"
          id="originPincode1"
          value={originPincode1}
          onChange={(e) => setOriginPincode1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination1"
          value={destination1}
          onChange={(e) => setDestination1(e.target.value)}
        />
      </div>
      
      </div>
      <button className="button" type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default User;