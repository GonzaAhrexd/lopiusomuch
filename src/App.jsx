import { useState } from 'react'
import Countdown from './components/Countdown'
import LoveYou from './components/LoveYou'
import Botones from './components/Botones'
import Juegos from './components/Juegos'
function App() {

  const [currentScreen, setCurrentScreen] = useState(0)

  const handleBack = () => {
    setCurrentScreen(0)
  }
  const handleTime = () => {
    setCurrentScreen(1)
  }

  const handleLove = () => {
    setCurrentScreen(2)
  }

  const handleJueguitos = () => {
    setCurrentScreen(3)
  }

  const flights = [
    { name: "Asunción ✈️ Madrid", flightCode: 'AEA24', flightStartTime: new Date('2023-07-09T19:20:00-03:00').getTime(), flightEndTime: new Date('2023-07-10T06:25:00-03:00').getTime() },
    { name: "Madrid ✈️ Roma", flightCode: 'ITY63', flightStartTime: new Date('2023-07-10T13:00:00-03:00').getTime(), flightEndTime: new Date('2023-07-10T15:25:00-03:00').getTime() },
    { name: "Roma ✈️ Bologna", flightCode: 'ITY1321', flightStartTime: new Date('2023-07-10T16:55:00-03:00').getTime(), flightEndTime: new Date('2023-07-10T17:50:00-03:00').getTime() },
  ];

  return (
    <>
      <div className="space">
  
        {currentScreen == 0 && <h1 className='texto'>Hola amorcito 😻</h1>
}
        <div className={currentScreen == 0 ? 'botones' : 'apartado'}>
          {currentScreen == 1 && /*Tiempo*/
            <Countdown handleBack={handleBack} flights={flights} />}
          {currentScreen == 2 && /*Notita*/
            <LoveYou handleBack={handleBack} />
          }
          {currentScreen == 3 && /*Jueguitos*/
            <Juegos handleBack={handleBack} />
          }

          {currentScreen == 0 && (
            <Botones handleJueguitos={handleJueguitos} handleTime={handleTime} handleLove={handleLove} />
          )
          }

        </div>
      </div>

    </>
  )
}

export default App
