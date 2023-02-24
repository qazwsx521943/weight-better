import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './styleModules/Home.module.css'

// --[components]
import ModalPlayer from './ModalPlayer'
import VideoCard from './components/VideoCard'

// --[material icon]
import SearchIcon from '@mui/icons-material/Search'

function HomeStory() {
  const [videos, setVideos] = useState([])
  const [videosCount, setVideosCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [playingStoryId, setPlayingStoryId] = useState('')
  const [playingStoryIdx, setPlayingStoryIdx] = useState(0)

  useEffect(() => {
    renderVideos() // 取得影片清單
  }, [])

  const uid = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).id
    : 0

  const renderVideos = async () => {
    try {
      const url = 'http://localhost:8080/story/videos'
      const response = await fetch(url)
      const data = await response.json()
      console.log(url, data)
      setVideos([...data])
      setVideosCount(data.length)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = () => {
    console.log('search')
  }

  const handleShowModal = (e, sid) => {
    setShowModal(!showModal)
    const newPlayingStoryIdx = videos.findIndex((el) => {
      return el.story_id === sid
    })
    setPlayingStoryId(sid)
    setPlayingStoryIdx(newPlayingStoryIdx)
  }

  return (
    <div className="wrapper d-flex flex-column align-items-center">
      <div className={`${styles.searchSection} container py-3 mx-5`}>
        <div className="row d-flex justify-end">
          <div className={`${styles.searchBox} col-3`}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <SearchIcon
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={handleSearch}
            ></SearchIcon>
          </div>
        </div>
      </div>
      <div className={`.container py-3 mx-5`}>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {videos.map((video) => (
            <VideoCard
              key={video.story_id}
              video={video}
              handleShowModal={handleShowModal}
              textSize={'text-h7 md:text-h6 lg:text-h5'}
              iconSize={'text-h6 md:text-h5 lg:text-h4'}
            ></VideoCard>
          ))}
        </div>
      </div>
      {showModal && (
        <ModalPlayer
          showModal={showModal}
          setShowModal={setShowModal}
          videos={videos}
          playingStoryId={playingStoryId}
          setPlayingStoryId={setPlayingStoryId}
          playingStoryIdx={playingStoryIdx}
          setPlayingStoryIdx={setPlayingStoryIdx}
          videosCount={videosCount}
          uid={uid}
        ></ModalPlayer>
      )}
    </div>
  )
}

export default HomeStory
