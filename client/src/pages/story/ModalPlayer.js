import React, { useState, useEffect } from 'react'

// --[style module]
import styles from './styleModules/Player.module.css'

import Comment from './components/Comment'

function ModalPlayer(props) {
  const { showModal, setShowModal, playingStoryId: sid } = props

  // if (!showModal) {
  //   return <></>
  // }

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const [videoData, setVideoData] = useState({})
  const [videoTags, setVideoTags] = useState([])
  const [collected, setCollected] = useState(true)
  const [userImage, setUserImage] = useState('user.png')

  useEffect(() => {
    componentDidMount()
  }, [])

  const componentDidMount = async () => {
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

  const collectStory = () => {
    console.log('click')
    setCollected(!collected)
  }

  const handleClickBubble = (e) => {
    e.stopPropagation()
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
        <div className="modal modal-dialog-centered" onClick={handleClick}>
          <div
            className="modal-content"
            style={{
              height: 'calc(100vh - 0px)',
              position: 'absolute',
              bottom: '0px',
              borderRadius: '0px',
            }}
            onClick={handleClickBubble}
          >
            <div className="modal-body p-0">
              <div className="container-fluid h-100 w-100">
                <div className="row" style={{ height: 'calc(100vh - 0px)' }}>
                  <div className="storyView col-7 p-0 d-flex h-100">
                    <video controls muted autoPlay className="bg-black">
                      <source
                        src={`http://localhost:8080/story/video/${sid}`}
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                  <div className="storyInfo col-5 d-flex flex-column px-4 h-100">
                    <div
                      className="infoDetail h-75 d-flex flex-column border-solid border-black"
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

                      <div className="storyTitle font-bold lg:text-h1 md:text-h2 text-h3 pt-4 pb-2">
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
                      <div className="flex-1 d-flex align-items-end py-2">
                        <div className="likesTimes d-flex">
                          <div className="likes font-bold lg:text-h4 md:text-h5 text-h6 mr-3">
                            <i className="fa-solid fa-heart text-pink"></i>
                            &nbsp;&nbsp;
                            {videoData.likes}
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
                              } text-primary`}
                            ></i>
                            <i
                              className={`fa-regular fa-bookmark ${
                                collected && styles.hide
                              } text-primary`}
                            ></i>
                            &nbsp;&nbsp;{collected ? '已收藏 !' : '收藏'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Comment className={'h-75'} sid={sid}></Comment>
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
