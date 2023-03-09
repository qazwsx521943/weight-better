import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/AuthContext";
import AuthService from "../../services/auth.service";

// --[分區]
import FirstPage from "./component/FirstPage/FirstPage";
import HomeStory from "./component/story/HomeStory";


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
    <div className="HomeWrapper">
        <FirstPage/>
        <HomeStory></HomeStory>
        <div style={{ height: 'calc(100vh)', backgroundColor: 'lightblue' }}></div>
    </div>
    )
};

export default Home;


