import React from 'react'

function Botones({handleTime, handleLove, handleFotitos}) {
  return (
    <> 
    <button className='mb-2 btn btn-outline-pink' onClick={handleTime}>Tiempo⌛</button>
    <button className='mb-2 btn btn-outline-pink' onClick={handleLove}>Love you 💖</button>
    <button className='mb-2 btn btn-outline-pink' onClick={handleFotitos}>Fotitos 📷</button>
    </>
  )
}

export default Botones