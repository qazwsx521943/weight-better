import React from 'react'
import styles from '../styleModules/VideoCard.module.css'

function VideoCard({ video, handleShowModal }) {
  return (
    <>
      <div
        className="col"
        key={video.story_id}
        onClick={(e) => {
          handleShowModal(e, video.story_id)
        }}
      >
        <div
          className={
            styles.videoCard + ' card border-0 overflow-hidden shadow-lg'
          }
          style={{
            backgroundColor: '#eee',
            borderRadius: '10px',
            aspectRatio: '16/10',
          }}
        >
          <div className="imgBox h-100">
            <img
              src={`http://localhost:8080/story/video/${video.story_path}/poster`}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
              alt={video.story_name}
            />
          </div>
          <div
            className={`${styles.storyInfo} card-body d-flex flex-wrap justify-evenly p-1`}
          >
            <div className="likes text-h7 md:text-h6 xl:text-h5">
              <i className="fa-solid fa-heart text-h6 md:text-h5 xl:text-h4 text-pink"></i>
              &nbsp;&nbsp;{video.likes}
            </div>
            <div className="times text-h7 md:text-h6 xl:text-h5">
              <i className="fa-solid fa-play text-h6 md:text-h5 xl:text-h4 text-teal"></i>
              &nbsp;&nbsp;{video.times}
            </div>
            <div className="storyTitle w-100 text-center font-bold text-h6 md:text-h5 xl:text-h4">
              {video.story_title}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard
