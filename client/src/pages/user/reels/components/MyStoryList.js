import React from 'react'
import { useState, useEffect } from 'react'

import VideoCard from '@/pages/story/components/VideoCard'
import ModalPlayer from '@/pages/story/ModalPlayer'

function MyStoryList({ uid }) {
  const [myStoryList, setMyStoryList] = useState([])

  const [videosCount, setVideosCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [playingStoryId, setPlayingStoryId] = useState('')
  const [playingStoryIdx, setPlayingStoryIdx] = useState(0)

  useEffect(() => {
    renderMyStory()
  }, [])

  const renderMyStory = () => {
    const url = `http://localhost:8080/story/my-videos`
    const data = { userId: uid }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(url, rData)
        setMyStoryList(rData)
        setVideosCount(rData.length)
      })
  }

  const handleShowModal = (e, sid) => {
    setShowModal(!showModal)
    const newPlayingStoryIdx = myStoryList.findIndex((el) => {
      return el.story_id === sid
    })
    setPlayingStoryId(sid)
    setPlayingStoryIdx(newPlayingStoryIdx)
  }

  return (
    <>
      <div className="container pt-3" style={{ boxSizing: 'border-box' }}>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
          {myStoryList.map((video) => (
            <VideoCard
              key={video.story_id}
              video={video}
              textSize={'text-h8 md:text-h7 lg:text-h6 xl:text-h6'}
              iconSize={'text-h7 md:text-h6 lg:text-h5 xl:text-h5'}
              handleShowModal={handleShowModal}
            ></VideoCard>
          ))}
        </div>
      </div>
      {showModal && (
        <ModalPlayer
          showModal={showModal}
          setShowModal={setShowModal}
          videos={myStoryList}
          playingStoryId={playingStoryId}
          setPlayingStoryId={setPlayingStoryId}
          playingStoryIdx={playingStoryIdx}
          setPlayingStoryIdx={setPlayingStoryIdx}
          videosCount={videosCount}
          uid={uid}
        ></ModalPlayer>
      )}
    </>
  )
}

export default MyStoryList
