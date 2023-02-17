import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styleHome.module.css'
import { Typography } from '@mui/material';
// import Test from './Test';

// --[material icon]
import SearchIcon from '@mui/icons-material/Search';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function HomeStory() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    componentDidMount() // 取得影片清單
  }, [])

  const componentDidMount = async () => {
    try{
      const url = 'http://localhost:8080/story/videos'
      const response = await fetch(url);
      const data = await response.json();
      console.log(url, data)
      setVideos([...data]);
    } catch(error){
      console.log(error)
    }
  } 

  const handleSearch = () => {
    console.log('search')
  }

  return (
    <div className="wrapper d-flex flex-column align-items-center">
      <div className={`${styles.searchSection} container py-3 mx-5`}>
        <div className="row d-flex justify-end">
          <div className={`${styles.searchBox} col-3`}>
            <input type="text" className={styles.searchInput} placeholder='Search...' />
            <SearchIcon sx={{flexGrow: 1, cursor: 'pointer'}} onClick={handleSearch}></SearchIcon>
          </div>
        </div>
      </div>
      <div className={`.container py-3 mx-5`}>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {videos.map(video =>
            <div className="col" key={video.story_id}>
                <Link to={`/reels/player/${video.story_id}`}>
                    <div className="card border-0 overflow-hidden shadow-lg" style={{'backgroundColor': '#eee', borderRadius: '10px'}}>
                      <div className="imgBox" >
                          <img src={`http://localhost:8080/story/video/${video.story_path}/poster`} style={{'width': '100%', 'height': '100%', 'display': 'block', 'objectFit': 'cover'}} alt={video.story_name} />
                      </div>
                      <div className={`${styles.storyInfo} card-body d-flex flex-wrap justify-evenly p-1`}>
                        <div className="likes text-h7 md:text-h6 xl:text-h5" ><i className="fa-solid fa-heart text-h6 md:text-h5 xl:text-h4 text-pink"></i>&nbsp;&nbsp;{video.likes}</div>
                        <div className="times text-h7 md:text-h6 xl:text-h5" ><i className="fa-solid fa-play text-h6 md:text-h5 xl:text-h4 text-teal"></i>&nbsp;&nbsp;{video.times}</div>
                        <div className="storyTitle w-100 text-center font-bold text-h6 md:text-h5 xl:text-h4" >{video.story_title}</div>
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