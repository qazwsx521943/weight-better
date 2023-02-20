import { borderBottom } from '@mui/system'
import React, { useEffect, useState } from 'react'

function Comment({ className, sid }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const url = `http://localhost:8080/story/comment/${sid}`
    fetch(url)
      .then((r) => r.json())
      .then((rData) => {
        console.log(url, rData)
        setComments(rData)
      })
  }, [])

  return (
    <div
      className={`${className} commentSection`}
      style={{ overflowY: 'scroll' }}
    >
      {comments.map((el) => {
        return (
          <div
            className="AComment container d-flex flex-column px-0 py-2"
            // style={{ borderBottom: '1px solid rgba(0, 0, 0, .2)' }}
            key={el.comment_id}
          >
            <div className="upper d-flex align-items-center">
              {/* <div className="chatIcon lg:text-h3 md:text-h4 text-h5 text-yellow">
              <i className="fa-solid fa-comment-dots"></i>
            </div> */}
              <div
                className="imgBox col-1"
                style={{
                  overflow: 'hidden',
                  borderRadius: '500px',
                  aspectRatio: '1/1',
                }}
              >
                <img
                  src={`/ImagesStory/users/${el.image_path || 'user.png'}`}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div className="username font-medium lg:text-h5 md:text-h6 text-h7 px-3">
                {el.name}
              </div>
              <div className="content lg:text-h5 md:text-h6 text-h7 px-3">
                {el.content}
              </div>
            </div>
            <div className="lower">
              <div
                className="time ml-auto col-11 lg:text-h6 md:text-h7 text-h8 px-3"
                style={{ color: 'rgba(0, 0, 0, .5)' }}
              >
                {el.time}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comment
