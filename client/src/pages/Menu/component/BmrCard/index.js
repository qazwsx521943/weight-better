import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import AuthService from '../../../../services/auth.service'
// import Typewriter from 'typewriter-effect'
import { display } from '@mui/system'

// console.log(__dirname)

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}))

const handleSubmit = (event) => {
  event.preventDefault()

  const fd = new FormData(event.target)
  console.log(fd)
}

function BmrCard({ userData, setUserData }) {
  const images = [
    {
      url: '/ImageMenu/Bmr01.jpg',
      title: '???????????????',
      width: '33%',
      name: '1.2',
      // name: 'never',
      // value: userData.bmr_val,
    },
    {
      url: '/ImageMenu/Bmr02.jpg',
      title: '????????????3-5???',
      width: '33%',
      name: '1.55',

      // name: 'often',
      // value: userData.bmr_val,
    },
    {
      url: '/ImageMenu/Bmr03.jpg',
      title: '????????????6-7???',
      width: '33%',
      name: '1.72',
      // name: 'always',
      // value: userData.bmr_val,
    },
  ]

  const submitUserData = () => {
    console.log(userData)
    const decodedToken = jwt_decode(AuthService.getCurrentUser().token)
    const uid = decodedToken.id
    const url = `http://localhost:8080/menu/addUserData/${uid}`

    fetch(url, {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(url, rData)
      })
  }

  const handleClick = (value) => {
    setUserData({ ...userData, bmr_val: value })
  }

  return (
    <div>
      <div></div>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 4,
            radio: '30',
          }}
        >
          <Typography
            id="input-slider"
            gutterBottom
            variant="h3"
            color="teal.main"
          >
            ???????????????
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
          }}
        >
          {images.map((image) => (
            <ImageButton
              // value={userData.age}
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
              onSubmit={handleSubmit}
              onClick={() => {
                handleClick(image.name)
              }}
            >
              {/* <ImageSrc src={require('./Image/01.jpg')} /> */}
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
        <div
          style={{
            width: ' 80%',
            position: 'relative',
            display: 'block',
            margin: 'auto',
            padding: '15px',
          }}
        >
          {/* <div style={{ background: 'pink', height: '40%', width: '40%', display: 'flex', justifyContent: 'center' }}> */}
          <div
            style={{
              position: 'absolute',
              left: '0',
            }}
          >
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'BMR ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????BMR ????????????????????????????????????????????????????????????????????????????????????'
                  )
                  .callFunction(() => {
                    console.log('String typed out!')
                  })
                  .pauseFor(2500)
                  // .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted')
                  })
                  .start()
              }}
            /> */}
          </div>
        </div>
      </Box>
    </div>
  )
}

export default BmrCard
