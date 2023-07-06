import React from 'react'

function Juegos({handleTime, handleLove, handleJueguitos}) {
  return (
    <> 
    <button className='mb-2 btn btn-outline-pink' onClick={handleTime}>Tiempo⌛</button>
    <button className='mb-2 btn btn-outline-pink' onClick={handleLove}>Love you 💖</button>
    <button className='mb-2 btn btn-outline-pink' onClick={handleJueguitos}>Jueguitos 🎮</button>
    </>
  )
}

export default Juegos