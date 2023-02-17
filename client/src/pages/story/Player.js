import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Player() {

  const {id} = useParams()

  const [videoId, setVideoId] = useState(id)
  const [videoData, setVideoData] = useState({})

  useEffect(() => {
    componentDidMount()
  })

  const componentDidMount = async () => {
    try {
      const res = await fetch(`http://localhost:8080/story/video/${videoId}/data`);
      const data = await res.json();
      setVideoData(data)
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="App">
    <header className="App-header">
        <video controls muted autoPlay>
            <source src={`http://localhost:8080/story/video/${videoId}`} type="video/mp4"></source>
        </video>
        <h1>{ videoData.name }</h1>
    </header>
  </div>
  )
}

export default Player