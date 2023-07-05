import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Countdown'
import LoveYou from './components/LoveYou'
import Botones from './components/Botones'
import Fotitos from './components/Fotitos'
function App() {


  const [currentScreen, setCurrentScreen] = useState(0)

  const handleBack = () => {
    setCurrentScreen(0)
  }
  const handleTime = () => {
    setCurrentScreen(1)
  }

  const handleLove = () => {
    console.log("Hola")
    setCurrentScreen(2)
  }

  const handleFotitos = () => {
    setCurrentScreen(3)
  }
  return (
    <>
      <div className="space">


        <div className={currentScreen == 0 ? 'botones' : 'apartado'}>
          {currentScreen == 1 &&
          <Countdown handleBack={handleBack}/>}
          {currentScreen == 2 &&
           <LoveYou handleBack={handleBack}/>
          }
          {currentScreen == 3 &&
            <Fotitos handleBack={handleBack}/>
          }

          {currentScreen == 0 && ( 
           <Botones handleFotitos={handleFotitos} handleTime={handleTime} handleLove={handleLove}/>
            )
          }
        </div>
       </div>

    </>
  )
}

export default App
