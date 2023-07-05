import React from 'react'
import VolverBoton from './VolverBoton'
function LoveYou({handleBack}) {
  return (
    <>
    <VolverBoton handleBack={handleBack}/>
    <div className='lovingyou'>
      <h1>Te amo mucho</h1>
      <p>Hola mi amor, en estos momentos seguramente estoy en el avión y no puedo hablarte. Antes de viajar preparé esta pequeña web App para que tengas una parte de mí en lo que no estoy, no te preocupes que ni bien llego te voy a mandar fotitos, hay un contador con el que podés ir viendo apróximadamente a qué hora estoy por llegar y espero que te guste este humilde regalito que te hice para mientras tanto. </p>
      <p>Te amo mucho mi vida, y ya te extraño, pero sé que vamos a volver a vernos y te voy a traer muuuchas cositas, porque te mereces todo, amorcito de mi vida.</p>
      <p>- Tu bebito chiquito uwu</p>
    </div>
    </>
  )
}

export default LoveYou