import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// --[component]
import Comment from './components/Comment';

function Player() {

  const {id} = useParams()

  const [videoId, setVideoId] = useState(id)
  const [videoData, setVideoData] = useState({})
  const [videoTags, setVideoTags] = useState([])

  useEffect(() => {
    componentDidMount()
  }, [])

  const componentDidMount = async () => {
    try {
      const url = `http://localhost:8080/story/video/${videoId}/data`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(url, data);
      setVideoData(data.rowsStory[0])
      setVideoTags(data.rowsTags)
    } catch (error) {
        console.log(error);
    }
  }
  return (

      <div className="container-fluid h-100 w-100">
        <div className="row" style={{height: 'calc(100vh - 75px)'}}>
          <div className="storyView col-6 p-0 d-flex">
            <video controls muted autoPlay style={{backgroundColor: '#000'}}>
                <source src={`http://localhost:8080/story/video/${videoId}`} type="video/mp4"></source>
            </video>
          </div>
          <div className="storyInfo col-6 d-flex flex-column">
            <div className="infoDetail flex-grow-2">
              <div className='storyTitle font-bold lg:text-h2 md:text-h3 text-h4'>{ videoData.story_title }</div>
              <div className="storyTags d-flex flex-wrap">
                {videoTags.map( el => {
                  return <div key={el.tag_id} className='storyTag font-bold lg:text-h5 md:text-h6 text-h7 mx-1'>#{ el.tag_name }</div>
                })}
              </div>
              <div className="likesTimes d-flex">
                <div className="likes font-bold lg:text-h5 md:text-h6 text-h7 mx-1" ><i className="fa-solid fa-heart text-h6 md:text-h5 xl:text-h4 text-pink"></i>&nbsp;&nbsp;{videoData.likes}</div>
                <div className="times font-bold lg:text-h5 md:text-h6 text-h7 mx-1" ><i className="fa-solid fa-play text-h6 md:text-h5 xl:text-h4 text-teal"></i>&nbsp;&nbsp;{videoData.times}</div>
              </div>
            </div>
            <Comment className={"flex-grow-2"}></Comment>
          </div>
        </div>
      </div>
  )
}

export default Player