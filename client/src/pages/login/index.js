import React from "react";
import { Box, Typography, useMediaQuery, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
// components
import Form from "./components/Form";
import Board from "./components/Board/Board";

import ArrowButton from "../authentication/ArrowButton/ArrowButton";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState();

    // 輸入框style
    const styles = {
        input: {
            backgroundColor: "primary.white",
            borderRadius: "4px",
        },
    };

    // 登入state存
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    // 變更即存檔
    const inputChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // FIXME 登入驗證api
    const loginAuth = async () => {
        // 登入POST
        try {
            let response = await AuthService.localLogin(loginData);
            localStorage.setItem("user", JSON.stringify(response.data));
            window.alert("登入成功 重新導向首頁");
            setCurrentUser(AuthService.getCurrentUser());
            navigate(`/user/${response.data.username}`);
        } catch (e) {
            setMessage(e.response.data);
        }
    };

    return (
        <Box overflow="hidden">
            <Board>
                <Form>
                    {/* <Typography color="black.main" variant="h2" fontWeight={500} marginY="2rem">
                        登入
                    </Typography> */}
                    <TextField label="帳號" name="username" value={loginData.username} onChange={inputChange} fullWidth sx={styles.input} />
                    <br />
                    <TextField
                        type="password"
                        label="密碼"
                        name="password"
                        value={loginData.password}
                        onChange={inputChange}
                        fullWidth
                        sx={styles.input}
                    />
                    <FormControlLabel control={<Checkbox />} label="保持登入" />

                    <a href={`${AuthService.googleLogin()}`}>
                        <img src={require("../../assets/google-sign.png")} width="250px" />
                    </a>
                    {message && <div className="text-teal">{message}</div>}
                    <ArrowButton onClick={loginAuth}></ArrowButton>
                    <br />
                    <div className="flex flex-row">
                        <Link to="/register" className="text-gray">
                            建立帳號？
                        </Link>
                        <Link to="/forgot" className="text-gray">
                            找回密碼？
                        </Link>
                    </div>
                </Form>
            </Board>
        </Box>
    );
};

export default Login;
