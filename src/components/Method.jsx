import React from 'react'

function Method() {
  return (
    <div>
        <div className='choose'>
            <h1>Choose the method</h1>
            <p>What method you want to use to find the deepfake bla bla</p>
        </div>
        <div className='choose-div'>
            <div className='choose-box'>
                <p>RNN</p>
            </div>
            <div className='choose-box'>
                <p>CNN</p>
            </div>
            <div className='choose-box'>
                <p>VIT</p>
            </div>
        </div>
    </div>
  )
}

export default Method