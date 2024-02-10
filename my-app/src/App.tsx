import React from 'react'
import './App.css';
import DesktopDivider from './images/pattern-divider-desktop.svg'
import MobileDivider from './images/pattern-divider-mobile.svg'
import IconDice from './images/icon-dice.svg'

function App() {
 

  return (
    <>
     <div className="advice-container">
       <h3>Advice # "" </h3>
       <p>"Lorem ipsum dolor sit amet, consectetur  eu accumsan augue nunc ullamcorper augue, eu accumsan augue nunc ullamcorper augue, eu accumsan augue "</p>
       <img src={DesktopDivider} className="desktop-divider" alt="desktop-divider" />
       <img src={MobileDivider} className="mobile-divider hidden" alt="mobile-divider" />
       <div className="iconDice-container">
       <img src={IconDice} className="icon-dice" alt="icon-dice" />
       </div>
     </div>
     <div className="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
        Coded by <a href="#"> AKRAM BOUTZOUGA</a>.
      </div>

        
    </>
  )
}

export default App
