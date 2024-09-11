import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/logo.png'
import './App.css'

import Upload from './components/Upload'
import Result from './components/Result'
import Method from './components/Method'
  
function App() {
  const [activeButton, setActiveButton] = useState(1);

  // Function to handle button click and set activeButton
  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleNext = () => {
    if (activeButton == 3) {
      setActiveButton(activeButton);
    } else {
      setActiveButton(activeButton + 1);
    }
  }
  const handleBack = () => {
    if (activeButton == 1) {
      setActiveButton(activeButton);
    } else {
      setActiveButton(activeButton - 1);
    }
  }
  return (
    <>
      <div className='nav'>
        <div className='logo-cover'>
          <div className='logo'>
            <img src={Logo} alt='React Logo' />
          </div>
          
          <p>GUARDIAN</p>
        </div>
        <div className='mid-nav'>
          <div>
            <button className='nav-box'
             onClick={() => handleClick(1)}
             style={{
               backgroundColor: activeButton === 1 ? "#000" : "#fff",
               color: activeButton == 1 ? "#fff" : "#000",
               border: activeButton === 1 ? "none" : "2px solid #D9D9D9",
               width: "1.5rem",
               height: "1.5rem",
               borderRadius: "0.5rem",
               cursor: "pointer",
             }}
            >1</button>
            <p>Upload</p>
            <div className='nav-line'></div>
          </div>
          <div>
            <button className='nav-box'
             onClick={() => handleClick(2)}
             style={{
              backgroundColor: activeButton === 2 ? "#000" : "#fff",
              color: activeButton == 2 ? "#fff" : "#000",
              border: activeButton === 2 ? "none" : "2px solid #D9D9D9",
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
             }}>2</button>
            <p>Method</p>
            <div  className='nav-line'></div>
          </div>
          <div>
            <button className='nav-box'
            onClick={() => handleClick(3)}
            style={{
              backgroundColor: activeButton === 3 ? "#000" : "#fff",
               color: activeButton == 3 ? "#fff" : "#000",
               border: activeButton === 3 ? "none" : "2px solid #D9D9D9",
               width: "1.5rem",
               height: "1.5rem",
               borderRadius: "0.5rem",
               cursor: "pointer",
            }}
            >3</button>
            <p>Result</p>
          </div>
        </div>
        <div>

        </div>
      </div>

      <div>

      {/* Conditionally render components based on active button */}
      <div style={{ marginTop: "20px" }}>
        {activeButton === 1 && <Upload />}
        {activeButton === 2 && <Method />}
        {activeButton === 3 && <Result />}
      </div>
      <div className='div-line'></div>
      {activeButton != 3 &&
        <div className='buttonMove'>
        <button className='back' onClick={handleBack}>Back</button>
        <button className='next' onClick={handleNext}>Next</button>
      </div>
      }
      {activeButton === 3 &&
      <div className='buttonMove'>
        <button className='next' onClick={() => window.location.reload()} >Start Again</button>
      </div>}
      
    </div>
    </>
  )
}

export default App
