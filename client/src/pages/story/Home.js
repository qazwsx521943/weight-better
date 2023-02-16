import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeStory() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    componentDidMount()
  }, [])

  const componentDidMount = async () => {
    try{
      const response = await fetch('http://localhost:8080/story/videos');
      const data = await response.json();
      setVideos([...data]);
    } catch(error){
      console.log(error)
    }
  } 

  return (
    <div className="App App-header">
      <div className="container">
        <div className="row">
          {videos.map(video =>
            <div className="col-md-4" key={video.id}>
                <Link to={`/reels/player/${video.id}`}>
                    <div className="card border-0">
                        <img width={'200'} src={`http://localhost:8080/story${video.poster}`} alt={video.name} />
                        <div className="card-body">
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                        </div>
                    </div>
                </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeStory