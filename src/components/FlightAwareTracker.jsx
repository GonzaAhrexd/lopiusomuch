import React from 'react';

const FlightAwareTracker = ({ flightCode }) => {
  const flightAwareUrl = `https://flightaware.com/live/flight/${flightCode}`;

  return (
    <div>
      <p>Acá podés seguir el avión, amor, el código es {flightCode}:</p>
      <a href={flightAwareUrl} target="_blank" rel="noopener noreferrer">
        FlightAware - Rastrear vuelo {flightCode}
      </a>
    </div>
  );
};

export default FlightAwareTracker;