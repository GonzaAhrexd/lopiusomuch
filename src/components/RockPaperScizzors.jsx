import React, { useState } from 'react';
import VolverBoton from './VolverBoton';

const RockPaperScissorsGame = ({ handleBack }) => {
  const choices = ['Piedra', 'Papel', 'Tijera']; // Opciones posibles del juego
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const makeComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = makeComputerChoice();
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };

  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult('Empate');
    } else if (
      (playerChoice === 'Piedra' && computerChoice === 'Tijera') ||
      (playerChoice === 'Tijera' && computerChoice === 'Papel') ||
      (playerChoice === 'Papel' && computerChoice === 'Piedra')
    ) {
      setResult('Ganaste');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <div>
      <h2 className='texto'> Piedra, Papel, Tijera</h2>
      <p className='texto-chico'>Elige una opción:</p>

     
      {playerChoice && computerChoice && result ? (
        <div>
          <p className='texto-chico'>Abi uwu: {playerChoice}</p>
          <p className='texto-chico'>Wonza uwu: {computerChoice}</p>
          <p className='texto-chico'>Resultado: {result}</p>
          <VolverBoton handleBack={handleBack} />
        </div>
      )
        : (
          <div className='centrar3'>
            {choices.map((choice) => (
              <button
                className='btn btn-outline-pink'
                key={choice}
                onClick={() => handlePlayerChoice(choice)}
                disabled={playerChoice !== ''}
              >
                {choice}
              </button>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default RockPaperScissorsGame;
