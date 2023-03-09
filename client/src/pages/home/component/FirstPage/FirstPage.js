import React from 'react'
import styled from "styled-components";

const Container =styled.div`

`
const Wrapper =styled.div`
flex-grow: 1;
`
const Round =styled.div`
width: 260px;
    height: 260px;
    border-radius: 50%;
    background-color: #1bb6b1b4;
    position: absolute;
    z-index: -1;
    right: 200px;
    top: 700px;
    animation: fadeInOut 6.5s infinite;

    @keyframes fadeInOut {
    0% {
    opacity: 0
    }
    50% {
    opacity: 1
    }
    100% {
    opacity: 0
    }

}
`
const Round2 =styled.div`
 width: 400px;
    height: 400px;
    border-radius: 50%;
    /* border: solid 1px #1BB6B2; */
    background-color: #1bb6b14e;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 500px;
    animation: fadeInOut 5s infinite;
    @keyframes fadeInOut {
    0% {
    opacity: 0
    }
    50% {
    opacity: 1
    }
    100% {
    opacity: 0
    }
}
`
const Round3 =styled.div`
 width: 300px;
    height: 300px;
    border-radius: 50%;
    /* border: solid 1px #1BB6B2; */
    background-color: #f58879b0;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 380px;
    animation: fadeInOut 7s infinite;
    @keyframes fadeInOut {
    0% {
        opacity: 0
        }
    50% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
} 
`
const Round4 =styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    /* border: solid 1px #1BB6B2; */
    background-color: #f5887946;
    position: absolute;
    z-index: -1;
    left: 80px;
    top: 500px;
    animation: fadeInOut 3s infinite;
    @keyframes fadeInOut {
    0% {
    opacity: 0
    }
    50% {
    opacity: 1
    }
    100% {
    opacity: 0
    }

}
`
const H1Img1 =styled.img`
width: 300px;
    position: absolute;
    z-index: 18;
    top: 430px;
    left: 200px;
`
const H1Tittle =styled.h1`
position: absolute;
    z-index: 18;
    left: 750px;
    top: 500px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    animation: fadeInOut 30s ;


@keyframes fadeInOut {
    0% {
    opacity: 0
    }
    50% {
    opacity: 1
    }
    100% {
    opacity: 0
    }

}
`
const H1Img2 =styled.img`
max-width: 466px;
    max-height: 547px;
    text-align: left;
    position: absolute;
    left: 0;
    z-index: -2;

`
const H1Img3 =styled.img`
    text-align: right;
    max-width: 890px;
    max-height: 890px;
    float: right;
    position: absolute;
    right: 0;
    z-index: -2;
`

function firstPage() {
  return (
    <div style={{height: 'calc(100vh - 64px)'}}>
        <Container style={{height: 'calc(100vh - 64px)'}}>
        <Wrapper style={{height: 'calc(100vh - 64px)'}}>
            <Round/>
            <Round2/>
            <Round3/>
            <Round4/>
            <H1Img1 src="HomeImgs\跑步 圖.png"/>
            <H1Tittle>從今天開始，遇見更好的自己</H1Tittle>
            <H1Img2 src="HomeImgs\messageImage2_.jpg"/>
            <H1Img3 src="HomeImgs\messageImage_1676258778039.jpg"/>
            
        </Wrapper>
    </Container></div>
  )
}

export default firstPage