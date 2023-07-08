import React, { useState, useEffect } from 'react';
import VolverBoton from './VolverBoton';

const GuessNumber = ({handleBack}) => {
  const [secretNumber, setSecretNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateSecretNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setSecretNumber(randomNum);
  };

  useEffect(() => {
    generateSecretNumber();
  }, []);

  const handleGuess = () => {
    const guessedNum = parseInt(guess, 10);
    setGuess('');

    if (isNaN(guessedNum)) {
      setMessage('Ingresa un número válido.');
      return;
    }

    if (guessedNum === secretNumber) {
      setMessage(`Muy bien mi amoooor owo, adivinaste el número en ${attempts + 1} intentos. 😼`);
      setGameOver(true);
    } else if (guessedNum < secretNumber) {
      setMessage('El número es mayor waaa');
    } else {
      setMessage('El número es menor waaa');
    }

    setAttempts(attempts + 1);
  };

  const resetGame = () => {
    generateSecretNumber();
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <>
     <VolverBoton handleBack={handleBack}/>
      <h2 className='texto'>Adivina el número del 1 al 100 amor owo</h2>
      {gameOver ? (
        <>  
          <p className='texto-chico'>{message}</p>
          <button className='btn btn-outline-pink' onClick={resetGame}>Jugar de nuevo uwu</button>
        </>
      ) : (
        <>
          <div className='centrar'>
          <p className='texto-chico'>{message}</p>
          <input className='input-outline-pink'
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            min="1"
            max="100"
            />
            </div>
          <button className='btn btn-outline-pink' onClick={handleGuess}>Adivinar owo</button>
        </>
      )}
    </>
  );
};

export default GuessNumber;
