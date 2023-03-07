import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/AuthContext";
import AuthService from "../services/auth.service";
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
    z-index: 20;
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
    z-index: 18;
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
    z-index: 18;
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
    z-index: 18;
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
width: 350px;
    position: absolute;
    z-index: 18;
    top: 780px;
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
    z-index: 14;

`
const H1Img3 =styled.img`
    text-align: right;
    max-width: 890px;
    max-height: 890px;
    float: right;
    position: absolute;
    right: 0;
    z-index: 14;
`



const Home = () => {
    const { userLogin } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
    const [rerender, setRerender] = useState(false);
    let codeParam = searchParams.get("code");
    useEffect(() => {
        // if (codeParam && localStorage.getItem("accessToken") === null) {
        //     async function githubAccessToken() {
        //         await axios.get(process.env.REACT_APP_API_KEY + "/githubAccessToken?code=" + codeParam).then((data) => {
        //             console.log(data);
        //             if (data.access_token) {
        //                 localStorage.setItem("accessToken", data.access_token);
        //                 setRerender(!rerender);
        //             }
        //         });
        //     }
        //     githubAccessToken();
        // }
        // async function googleAccessToken() {
        //     let user = await axios.get(`${process.env.REACT_APP_API_KEY}/auth/google/callback`);
        //     localStorage.setItem("user", user);
        //     userLogin(AuthService.getCurrentUser());
        // }
        // googleAccessToken();
    }, []);

    return (
    <div>
    {/* Home */}

    <Container>
        <Wrapper>
            <Round/>
            <Round2/>
            <Round3/>
            <Round4/>
            <H1Img1 src="client\public\HomeImgs\跑步 圖.png"/>
            <H1Tittle>從今天開始，遇見更好的自己</H1Tittle>
            <H1Img2 src="client\public\HomeImgs\messageImage_1676258778039.jpg"/>
            <H1Img3 src="client\public\HomeImgs\messageImage2_.jpg"/>
            
        </Wrapper>
    </Container>
    </div>
    )
};

export default Home;


