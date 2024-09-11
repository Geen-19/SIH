import React from 'react'
import video from '../assets/video.png'
function Upload() {
  return (
    <div className='upload'>
        <div className='up-text'>
            <h1>Upload your video </h1>
            <p>Upload the video you want to check if it's deep faked or not?</p>
        </div>

        <div className='video'>
            <div className='video-cover'>
                <div>
                    <img src={video} alt="" />
                </div>
                <p>Upload the video</p>
                <p>Maximum file size: 100 MB</p>
                <p>Supported format: MP4</p>
            </div>
        </div>
    </div>
  )
}

export default Upload