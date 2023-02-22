import React, { useState, useEffect } from 'react'

// --[style module]
import styles from './styleModules/Player.module.css'

import { Alert, Fade } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import Comment from './components/Comment'
// import { useAuth } from '@/hooks/AuthContext'

function ModalPlayer(props) {
  // const { currentUser } = useAuth()
  const {
    showModal,
    setShowModal,
    playingStoryId: sid,
    setPlayingStoryId,
    playingStoryIdx: sidx,
    setPlayingStoryIdx,
    videosCount,
    videos,
    uid,
  } = props

  const [videoData, setVideoData] = useState({})
  const [videoTags, setVideoTags] = useState([])
  const [videoLikes, setVideoLikes] = useState('')
  const [videoWatches, setVideoWatches] = useState('')
  const [collected, setCollected] = useState(false)
  const [liked, setLiked] = useState(false)
  const [userImage, setUserImage] = useState('user.png')
  const [openAlert, setOpenAlert] = useState({ open: false, text: '' })

  useEffect(() => {
    renderLike()
    renderCollect()
    renderStory()
  }, [sid])

  // --[開啟或關閉 player]
  const showOrCloseModal = () => {
    clearInterval(timer)
    setShowModal(!showModal)
  }

  // --[播放時開始監控影片進度]
  let timer
  const handlePlay = (e) => {
    const video = e.currentTarget
    timer = setInterval(() => {
      console.log('check progress')
      const currentTime = video.currentTime
      const duration = video.duration

      if (currentTime / duration > 0.5) {
        clearInterval(timer)
        updateWatched()
      }
    }, 1000)
  }

  // --[暫停時暫停監控影片進度]
  const handlePause = (e) => {
    clearInterval(timer)
  }

  // --[取得影片資料清單]
  const renderStory = async () => {
    try {
      const url = `http://localhost:8080/story/video/${sid}/data`
      const res = await fetch(url)
      const data = await res.json()
      console.log(url, data)
      setVideoData(data.rowsStory[0])
      setVideoTags(data.rowsTags)
      setUserImage(data.rowsStory[0].profile_image)
      setVideoWatches(data.rowsStory[0].times)
    } catch (error) {
      console.log(error)
    }
  }

  // --[確認此影片的按讚數 & 使用者有沒有按讚]
  const renderLike = () => {
    const url = `http://localhost:8080/story/video/${sid}/like-count`
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
        setVideoLikes(rData.count)
        setLiked(rData.liked)
      })
  }

  // --[確認使用者有沒有收藏此影片]
  const renderCollect = () => {
    if (!uid) {
      return
    }

    const url = `http://localhost:8080/story/video/${sid}/check-collect`
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
        setCollected(rData.collected)
      })
  }

  // --[使用者收藏 or 取消收藏此影片]
  const collectStory = () => {
    if (!uid) {
      setOpenAlert({ open: true, text: '先登入才能收藏' })
      setTimeout(() => {
        setOpenAlert({ open: false, text: '先登入才能收藏' })
      }, 2000)

      return
    }

    const url = `http://localhost:8080/story/video/${sid}/collect`
    const data = { userId: uid, collected: collected ? '1' : '0' }

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
        setCollected(!collected)
      })
  }

  // --[使用者按讚 or 取消按讚此影片]
  const likeStory = () => {
    if (!uid) {
      setOpenAlert({ open: true, text: '先登入才能按讚' })
      setTimeout(() => {
        setOpenAlert({ open: false, text: '先登入才能按讚' })
      }, 2000)

      return
    }

    const url = `http://localhost:8080/story/video/${sid}/like`
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
        setLiked(rData.liked)
        renderLike()
      })
  }

  // --[確認此影片的觀看數]
  const updateWatched = () => {
    const url = `http://localhost:8080/story/video/${sid}/watched`
    fetch(url)
      .then((r) => r.json())
      .then((rData) => {
        console.log(url, rData)
        setVideoWatches(videoWatches + 1)
      })
  }

  // --[上一個影片]
  const goPrevStory = () => {
    clearInterval(timer)
    if (sidx > 0) {
      console.log(sidx - 1)
      const prevStoryId = videos[sidx - 1].story_id
      setPlayingStoryIdx(sidx - 1)
      setPlayingStoryId(prevStoryId)
    }
  }

  // --[下一個影片]
  const goNextStory = () => {
    clearInterval(timer)
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
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '3000' }}
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
                  <Fade
                    in={openAlert.open}
                    sx={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      zIndex: '3000',
                      width: '30%',
                      transform: 'translate(-50%, 0%)',
                      transition: '.3s',
                    }}
                    timeout={800}
                  >
                    <Alert
                      severity="info"
                      sx={{ mb: 2 }}
                      action={
                        <IconButton
                          aria-label="close"
                          size="small"
                          onClick={() => {
                            setOpenAlert({ ...openAlert, open: false })
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      {openAlert.text}
                    </Alert>
                  </Fade>
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
                      onPlay={handlePlay}
                      onPause={handlePause}
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
                            src={`${
                              userImage || '/ImagesStory/users/user.png'
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
                          {videoData.username}
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
                            className="likes d-flex align-items-center font-bold lg:text-h5 md:text-h6 text-h7 mr-3"
                            onClick={likeStory}
                          >
                            <i
                              className={`fa-solid fa-heart lg:text-h4 md:text-h5 text-h6 text-pink ${
                                !liked && styles.hide
                              }`}
                            ></i>
                            <i
                              className={`fa-regular fa-heart lg:text-h4 md:text-h5 text-h6 text-pink ${
                                liked && styles.hide
                              }`}
                            ></i>
                            &nbsp;&nbsp;
                            {videoLikes}
                          </div>
                          <div className="times d-flex align-items-center font-bold lg:text-h5 md:text-h6 text-h7 mr-3">
                            <i className="fa-solid fa-play lg:text-h4 md:text-h5 text-h6 text-teal"></i>
                            &nbsp;&nbsp;
                            {videoWatches}
                          </div>
                          <div
                            className="collect d-flex align-items-center font-bold lg:text-h5 md:text-h6 text-h7 mr-3"
                            onClick={collectStory}
                          >
                            <i
                              className={`fa-solid fa-bookmark lg:text-h4 md:text-h5 text-h6 ${
                                !collected && styles.hide
                              } text-main`}
                            ></i>
                            <i
                              className={`fa-regular fa-bookmark lg:text-h4 md:text-h5 text-h6 ${
                                collected && styles.hide
                              } text-main`}
                            ></i>
                            &nbsp;&nbsp;{collected ? '已收藏 !' : '收藏'}
                            {/* {openAlert.text} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Comment
                      className={'flex-1'}
                      sid={sid}
                      uid={uid}
                      openAlert={openAlert}
                      setOpenAlert={setOpenAlert}
                    ></Comment>
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
