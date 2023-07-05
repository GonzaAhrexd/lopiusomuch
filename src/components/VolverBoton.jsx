import React from 'react'

function VolverBoton({ handleBack }) {
  return (
    <div>
      <button onClick={() => handleBack()} className='back btn btn-outline-pink'> ← </button>
    </div>
  )
}

export default VolverBoton