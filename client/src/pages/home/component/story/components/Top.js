import React, { useEffect } from 'react'
import styles from '../HomeStory.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Top() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to('.imgset1 .imgBox', {
      x: -500,
      duration: 5,
      scrollTrigger: {
        trigger: '.top',
        start: 'top 100%',
        end: 'bottom -200%',
        scrub: 4,
        // markers: true,
        toggleActions: 'restart none none none',
      },
    })
    gsap.to('.imgset2 .imgBox', {
      x: -2000,
      duration: 5,
      scrollTrigger: {
        trigger: '.top',
        start: 'top 100%',
        end: 'bottom -200%',
        scrub: 4,
        // markers: true,
        toggleActions: 'restart none none none',
      },
    })
    gsap.to('.imgset3 .imgBox', {
      x: -500,
      duration: 5,
      scrollTrigger: {
        trigger: '.top',
        start: 'top 100%',
        end: 'bottom -200%',
        scrub: 4,
        // markers: true,
        toggleActions: 'restart none none none',
      },
    })
  }, [])
  return (
    <>
      <div className={styles.top + ' top'}>
        <div className={styles.title + ' title'}>
          <h2 className="text-h1 text-mainblack font-bold mb-1">短影音</h2>
          <p className="text-center">
            分享您的體態管理日常與技巧，
            <br />
            讓居家學習與交流更簡單！
          </p>
        </div>
        <div className={styles.imgset + ' imgset imgset1'}>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg01.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg02.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg03.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg04.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg01.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg02.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg03.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg04.jpg"
              alt="bg"
            />
          </div>
        </div>
        <div
          className={styles.imgset + ' ' + styles.imgset2 + ' imgset imgset2'}
        >
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg05.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg06.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg07.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg08.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg13.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg14.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg15.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg16.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg17.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg18.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg19.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg05.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg06.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg07.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg08.jpg"
              alt="bg"
            />
          </div>
        </div>
        <div className={styles.imgset + ' imgset imgset3'}>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg09.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg10.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg11.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg12.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg09.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg10.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg11.jpg"
              alt="bg"
            />
          </div>
          <div className={styles.imgBox + ' imgBox'}>
            <img
              className={styles.img + ' img'}
              src="/HomeImgs/bg12.jpg"
              alt="bg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Top
