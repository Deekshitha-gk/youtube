



import React from 'react'

const VideoPlayer = ({ vid }) => {

  if (!vid) {
    return <h2>Select a video</h2>
  }

  return (
    <div>
      <video key={vid} controls autoPlay>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer