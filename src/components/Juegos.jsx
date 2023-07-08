import React, { useState } from 'react'
import VolverBoton from './VolverBoton'
import Hangman from './Hangman'
import RockPaperScissorsGame from './RockPaperScizzors'
import GuessNumber from './GuessNumber'
function Juegos({ handleBack }) {

  const [selectGame, setSelectGame] = useState(0)
  const handleGame1 = () => {
    setSelectGame(1)
  }
  const handleGame2 = () => {
    setSelectGame(2)
  }

  const handleGame3 = () => {
    setSelectGame(3)
  }
  return (
    <>
      {selectGame === 0 &&
        (
          <>
            <VolverBoton handleBack={handleBack} />
            <h1 className='texto'>Jueguitos para mi amorcito uwu</h1>
            <button className='mb-2 btn btn-outline-pink' onClick={handleGame1}>Adivina la palabra uwu</button>
            <button className='mb-2 btn btn-outline-pink' onClick={handleGame2}>Piedra, Papel o Tijera uwu</button>
            <button className='mb-2 btn btn-outline-pink' onClick={handleGame3}>Adivina el número uwu</button>
          </>
        )}
      {selectGame === 1 && 
      (
        <Hangman handleBack={handleBack}/>
      )}
      {selectGame === 2 && (
        <RockPaperScissorsGame handleBack={handleBack}/>
      )}
       {selectGame === 3 && (
        <GuessNumber handleBack={handleBack}/>
      )}
    </>
  )
}

export default Juegos