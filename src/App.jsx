import { useState } from 'react'
import './App.css'
import Countdown from './components/Countdown'
import LoveYou from './components/LoveYou'
import Botones from './components/Botones'
import Hangman from './components/Hangman'
import MusicPlayer from './components/MusicPlayer'


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
    { name: "Asunción ✈️ Madrid", flightStartTime: new Date('2023-07-05T14:02:00-03:00').getTime(), flightEndTime: new Date('2023-07-05T16:10:00-03:00').getTime() },
    { name: "Asunción ✈️ Madrid", flightStartTime: new Date('2023-07-09T18:20:00-03:00').getTime(), flightEndTime: new Date('2023-07-10T06:25:00-03:00').getTime() },
    { name: "Madrid ✈️ Roma", flightStartTime: new Date('2023-07-10T13:00:00+02:00').getTime(), flightEndTime: new Date('2023-07-10T15:25:00+02:00').getTime() },
    { name: "Roma ✈️ Bologna", flightStartTime: new Date('2023-07-10T16:55:00+02:00').getTime(), flightEndTime: new Date('2023-07-10T17:50:00+02:00').getTime() },
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
          {currentScreen == 3 &&
            <Hangman handleBack={handleBack} />
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
