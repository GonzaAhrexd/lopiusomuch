import React, { useState, useEffect } from 'react';
import VolverBoton from './VolverBoton';

const Countdown = ({ flights, handleBack }) => {
  const [remainingTime, setRemainingTime] = useState(null);
  const [currentFlight, setCurrentFlight] = useState(null);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentTime = new Date().getTime();
      let flightInProgress = null;

      for (let i = 0; i < flights.length; i++) {
        const { flightStartTime, flightEndTime } = flights[i];

        if (currentTime >= flightStartTime && currentTime <= flightEndTime) {
          flightInProgress = flights[i];
          break;
        }
      }

      if (flightInProgress) {
        setCurrentFlight(flightInProgress);
        setRemainingTime(flightInProgress.flightEndTime - currentTime); // Vuelo en progreso
      } else {
        setCurrentFlight(null);
        setRemainingTime(null); // No hay vuelo en progreso
      }
    };

    calculateRemainingTime(); // Llamar a la función al cargar el componente

    const intervalId = setInterval(() => {
      calculateRemainingTime(); // Llamar a la función cada segundo
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [flights]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <div>
        <VolverBoton handleBack={handleBack} />
      </div>
      <div className='timer'>
        <h2>Estado del vuelo</h2>
        {currentFlight ? (
          <>
            <p>Vuelo: {currentFlight.name}</p>
            <p>Tiempo restante: {formatTime(remainingTime)}</p>
          </>
        ) : (
          <p className='m-2'>Ya arribé amorcito, enseguida te escribo uwu</p> // No hay vuelo en progreso
        )}
      </div>
    </>
  );
};

export default Countdown;

