import React from 'react';

const FlightAwareTracker = ({ flightCode }) => {
  const flightAwareUrl = `https://flightaware.com/live/flight/${flightCode}`;

  return (
    <div>
      <p className='d-flex justify-content-center'>Vuelo: {flightCode}</p>
      <a className='btn btn-outline-pink' href={flightAwareUrl} target="_blank" rel="noopener noreferrer">
      Acá podés seguir el avión, preciosa 😻 
      </a>
    </div>
  );
};

export default FlightAwareTracker;