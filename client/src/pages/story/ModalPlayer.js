import React, { useState, useEffect } from 'react'

// --[style module]
import styles from './styleModules/Player.module.css'

import Comment from './components/Comment'

function ModalPlayer(props) {
  const {
    showModal,
    setShowModal,
    playingStoryId: sid,
    setPlayingStoryId,
    playingStoryIdx: sidx,
    setPlayingStoryIdx,
    videosCount,
    videos,
  } = props

  const showOrCloseModal = () => {
    setShowModal(!showModal)
  }

  const [videoData, setVideoData] = useState({})
  const [videoTags, setVideoTags] = useState([])
  const [videoLikes, setVideoLikes] = useState('')
  const [collected, setCollected] = useState(true)
  const [liked, setLiked] = useState(false)
  const [userImage, setUserImage] = useState('user.png')
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    renderLike()
    renderStory()
    // setVideoUrl(`http://localhost:8080/story/video/${sid}/get`)
  }, [])

  useEffect(() => {
    renderLike()
    renderStory()
  }, [sid])

  const renderStory = async () => {
    try {
      const url = `http://localhost:8080/story/video/${sid}/data`
      const res = await fetch(url)
      const data = await res.json()
      console.log(url, data)
      setVideoData(data.rowsStory[0])
      setVideoTags(data.rowsTags)
      setUserImage(data.rowsStory[0].image_path)
    } catch (error) {
      console.log(error)
    }
  }

  const renderLike = async () => {
    const url = `http://localhost:8080/story/video/${sid}/like-count`
    const data = { userId: 1 }

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
        setVideoLikes(rData.count)
        setLiked(rData.liked)
      })
  }

  const collectStory = () => {
    console.log('collect')
    setCollected(!collected)
  }

  const likeStory = () => {
    console.log('like')

    const url = `http://localhost:8080/story/video/${sid}/like`
    const data = { userId: 1 }
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
        setLiked(rData.liked)
        renderLike()
      })
  }

  const goPrevStory = () => {
    if (sidx > 0) {
      console.log(sidx - 1)
      const prevStoryId = videos[sidx - 1].story_id
      setPlayingStoryIdx(sidx - 1)
      setPlayingStoryId(prevStoryId)
    }
  }
  const goNextStory = () => {
    if (sidx < videosCount - 1) {
      console.log(sidx + 1)
      const nextStoryId = videos[sidx + 1].story_id
      setPlayingStoryIdx(sidx + 1)
      setPlayingStoryId(nextStoryId)
    }
  }

  return (
    <>
      <div
        className={`modal fade ${showModal ? 'show d-block' : 'show d-none'}`}
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <div
          className="modal modal-dialog-centered"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="modal-content"
            style={{
              height: 'calc(100vh - 0px)',
              width: 'calc(100vw - 0px)',
              position: 'absolute',
              bottom: '0px',
              borderRadius: '0px',
            }}
          >
            <div className="modal-body h-100 p-0">
              <div className="container-fluid h-100 p-0">
                <div
                  className="row h-100 w-100 m-0"
                  style={{ boxSizing: 'border-box', position: 'relative' }}
                >
                  <button
                    className={styles.closeBtn}
                    type="button"
                    onClick={showOrCloseModal}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <button
                    className={styles.nextBtn}
                    type="button"
                    onClick={goNextStory}
                  >
                    <i className="fa-solid fa-forward-step"></i>
                  </button>

                  <div
                    className="storyView col-7 p-0 h-100"
                    style={{ position: 'relative' }}
                  >
                    <video
                      controls
                      muted
                      autoPlay
                      className="bg-black h-100"
                      src={`http://localhost:8080/story/video/${sid}/get`}
                      type="video/mp4"
                    ></video>
                    <button
                      className={styles.prevBtn}
                      type="button"
                      onClick={goPrevStory}
                    >
                      <i className="fa-solid fa-backward-step"></i>
                    </button>
                  </div>
                  <div className="storyInfo col-5 d-flex flex-column h-100 border-none pl-4 pr-14">
                    <div
                      className="infoDetail d-flex flex-column border-solid border-black border-opacity-25"
                      style={{ borderBottomWidth: '1px' }}
                    >
                      <div className="userInfo container-fluid d-flex px-0 py-4">
                        <div className={styles.imgBox + ' col-2 mr-4'}>
                          <img
                            src={`/ImagesStory/users/${
                              userImage || 'user.png'
                            }`}
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'block',
                              objectFit: 'cover',
                            }}
                            alt="userImage"
                          />
                        </div>
                        <div className="userName flex-1 font-bold lg:text-h2 md:text-h3 text-h4 d-flex align-items-center">
                          {videoData.name}
                        </div>
                      </div>

                      <div className="storyTitle font-bold lg:text-h2 md:text-h3 text-h4 pt-4 pb-2">
                        {videoData.story_title}
                      </div>
                      <div className="storyTags d-flex flex-wrap">
                        {videoTags.map((el) => {
                          return (
                            <div
                              key={el.tag_id}
                              className="storyTag font-bold lg:text-h5 md:text-h6 text-h7 mr-2"
                            >
                              #{el.tag_name}
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex-1 d-flex align-items-end py-2 mt-4">
                        <div className="likesTimes d-flex">
                          <div
                            className="likes font-bold lg:text-h4 md:text-h5 text-h6 mr-3"
                            onClick={likeStory}
                          >
                            <i
                              className={`fa-solid fa-heart text-pink ${
                                !liked && styles.hide
                              }`}
                            ></i>
                            <i
                              className={`fa-regular fa-heart text-pink ${
                                liked && styles.hide
                              }`}
                            ></i>
                            &nbsp;&nbsp;
                            {videoLikes}
                          </div>
                          <div className="times font-bold lg:text-h4 md:text-h5 text-h6 mr-3">
                            <i className="fa-solid fa-play text-teal"></i>
                            &nbsp;&nbsp;
                            {videoData.times}
                          </div>
                          <div
                            className="times font-bold lg:text-h4 md:text-h5 text-h6 mr-3"
                            onClick={collectStory}
                          >
                            <i
                              className={`fa-solid fa-bookmark ${
                                !collected && styles.hide
                              } text-main`}
                            ></i>
                            <i
                              className={`fa-regular fa-bookmark ${
                                collected && styles.hide
                              } text-main`}
                            ></i>
                            &nbsp;&nbsp;{collected ? '已收藏 !' : '收藏'}
                            {sidx}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Comment className={'flex-1'} sid={sid}></Comment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalPlayer
