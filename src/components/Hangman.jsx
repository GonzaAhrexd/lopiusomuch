import React, { useState } from 'react';
import VolverBoton from './VolverBoton';

const Hangman = ({handleBack}) => {
  const words = ['WATO', 'STITCH', 'PANFU', 'PULSERITAS', 'LOPIU', 'PRECIOSA', 'CHIQUITA', 'MISSU', 'BESITOUWU']; // Palabras disponibles para el juego
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const selectWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toUpperCase());
  };

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameOver) {
      return;
    }
  
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
  
    const guessedWord = selectedWord
      .split('')
      .map((letter) => (newGuessedLetters.includes(letter) ? letter : '_'))
      .join('');
  
    if (guessedWord === selectedWord) {
      setGameOver(true);
      return;
    }
  
    if (!selectedWord.includes(letter)) {
      setRemainingAttempts(remainingAttempts - 1);
    }

    const newDisabledButtons = [...disabledButtons, letter];
    setDisabledButtons(newDisabledButtons);
  
    checkGameOver();
  };
  
  const checkGameOver = () => {
    const guessedWord = selectedWord
      .split('')
      .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
      .join('');

    if (guessedWord === selectedWord) {
      setGameOver(true);
      return;
    }

    if (remainingAttempts === 0) {
      setGameOver(true);
    }
  };

  const renderGameStatus = () => {
    if (gameOver) {
      if (remainingAttempts === 0) {
        return <p className='texto-chico'>Perdiste amor {':('}, la palabra era {selectedWord} waaa</p>;
      } else {
        return <p className='texto-chico'>Muy bien amoooor owo</p>;
      }
    } else {
      if (remainingAttempts === 0) {
        return <p className='texto-chico'>Perdiste amor {':('}, la palabra era {selectedWord} waaa</p>;
      } else {
        return <p className='texto-chico'>Intentos restantes: {remainingAttempts}</p>;
      }
    }
  };

  const renderWordDisplay = () => {
    const display = selectedWord
      .split('')
      .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ');

    return <p className='texto-chico'>{display}</p>;
  };

  const renderAlphabetButtons = () => {
    const alphabet ='QWERTYUIOPASDFGHJKLÑZXCVBNM';

    return (
      alphabet.split('').map((letter) => (
        <button
          className='alphabet'
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || gameOver || disabledButtons.includes(letter)}
        >
          {letter}
        </button>
      ))
    );
  };

  return (
    <>
      <h2 className='texto'>Adivina amor owo</h2>

      {selectedWord ? (
        <>
          <div className='centrar'>
            {renderGameStatus()}
            {renderWordDisplay()}
          </div>
          {!gameOver && 
          <div className='centrar2'>
            <p className='texto'>Adivina una letra:</p>
            {renderAlphabetButtons()}
          </div>}
        </>
      ) : (
        <button className='btn btn-outline-pink' onClick={selectWord}>Comenzar</button>
      )}

      {gameOver && 
      <VolverBoton handleBack={handleBack}/>
      }
    </>
  );
};

export default Hangman;
