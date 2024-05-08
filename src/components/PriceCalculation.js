import React, { useState } from 'react';
import '../style/price.css'

function PriceCalculation() {
  // const [Weight, setWeight] = useState('');
  // const [Weight1, setWeight1] = useState('');
  // const [Length, setLength] = useState('');
  // const [height, setheight] = useState('');
  // const [Width, setWidth] = useState('');
  // const [shipment1, setShipment1] = useState('');
  // const [Shipment, setShipment] = useState('');
  // const [Content, setContent] = useState('');
  const [Weight, setWeight] = useState('');
  const [Weight1, setWeight1] = useState('');
  const [Length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [Width, setWidth] = useState('');
  const [shipment, setShipment] = useState(''); // Changed from shipment1 to shipment
  const [content, setContent] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, you can send data to backend or perform any action you want
    console.log('Submitted:', {Weight});
    const resultObj = {
      DTDC: Weight * multiplierdtdc,
      DHL: Weight * multiplierdhl,
      BlueDart: Weight * multiplierbluedart,
      FedEx: Weight * multiplierfedex,
    };
    setResult(resultObj);
  };
  const handleSubmit1 = (event) => {
    // event.preventDefault();
    // // Handle form submission here, you can send data to backend or perform any action you want
    // console.log('Submitted:', { Weight1,Length,Width,height,shipment });

    // const multiplierdtdc = 4;
    // const multiplierdhl = 5;
    // const multiplierbluedart = 6;
    // const multiplierfedex= 7;
    event.preventDefault();
    console.log('Non-Document Submitted:', { Weight1, Length, Width, height, shipment, content });
    const resultObj = {
      DTDC: Weight1 * multiplierdtdc+Length * multiplierdtdc +Width* multiplierdtdc+height * multiplierdtdc,
      DHL: Weight1 * multiplierdhl+Length * multiplierdhl +Width* multiplierdhl+height * multiplierdhl,
      BlueDart: Weight1 * multiplierbluedart+Length * multiplierbluedart +Width* multiplierbluedart+height * multiplierbluedart,
      FedEx: Weight1 * multiplierfedex+Length * multiplierfedex +Width* multiplierfedex+height * multiplierfedex,
    };
    setResult(resultObj);
  };

  const multiplierdtdc = 4;
  const multiplierdhl = 5;
  const multiplierbluedart = 6;
  const multiplierfedex = 7;

return (
  <div className='form'>
    <div className='Form1'>
      <form onSubmit={handleSubmit}>
        <div className='Document'>
          <h1 className='title'>Document</h1>
          <div>
            <label htmlFor="Weight">Weight(grams):</label>
            <input
              type="number"
              id="Weight"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div className='Form2'>
      <form onSubmit={handleSubmit1}>
        <div className='Non-Document'>
          <h1 className='title'>Non-Document</h1>
          <div>
            <label htmlFor="Weight1">Weight(kg):</label>
            <input
              type="number"
              id="Weight1"
              value={Weight1}
              onChange={(e) => setWeight1(e.target.value)}
            />
          </div>
          <h1>Measurement</h1>
          <div>
            <label htmlFor="Length">Length</label>
            <input
              type="number"
              id="Length"
              value={Length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Width">Width</label>
            <input
              type="number"
              id="Width"
              value={Width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Height">Height</label>
            <input
              type="number"
              id="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Shipment">Shipment</label>
            <input
              type="number"
              id="Shipment"
              value={shipment}
              onChange={(e) => setShipment(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Content">Content</label>
            <input
              type="text"
              id="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <br />
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
    {result && (
      <div className="result-container" style={{padding:'190px'}}>
        {Object.entries(result).map(([carrier, value]) => (
          <div key={carrier} className="card">
            <h3>{carrier}</h3>
            <p>Price: {value}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default PriceCalculation;