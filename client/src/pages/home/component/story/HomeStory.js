import React from 'react'
import styles from './HomeStory.module.css'
import Top from './components/Top'
import Bottom from './components/Bottom'

function HomeStory() {
  return (
    <div
      className={styles.homeStoryWrapper + ' container-fluid p-0'}
      style={{ height: 'calc(100vh)', backgroundColor: '#fff' }}
    >
      <Top></Top>
      <Bottom></Bottom>
    </div>
  )
}

export default HomeStory
