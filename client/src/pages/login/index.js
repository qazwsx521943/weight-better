import React from "react";
import {
    Box,
    Typography,
    useMediaQuery,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../global/states/AuthContext";
import axios from "axios";
// components
import Form from "../global/Form";
import Gallery from "./components/Gallery";
import ArrowButton from "./components/ArrowButton/ArrowButton";
import Home from "../home/Home";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
    const navigate = useNavigate();
    const { setLogin } = useContext(AuthContext);

    // 輸入框style
    const styles = {
        input: {
            backgroundColor: "primary.main",
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
    const loginAuth = () => {
        // 登入POST
        console.log(loginData);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/user/login`, loginData)
            .then((res) => {
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    // 將token存入session
                    localStorage.setItem("userToken", res.data);
                    // set login
                    setLogin(true);
                    // 跳轉首頁
                    navigate("/user/profile");
                }
            });
    };

    return (
        <>
            <Gallery />
            <div
                className={`top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute w-96 ${styles.container}`}
            >
                <Form>
                    <Typography
                        color="black.main"
                        variant="h2"
                        fontWeight={500}
                        marginY="2rem"
                    >
                        登入
                    </Typography>
                    {/* FIXME TEXT COLOR */}
                    <TextField
                        label="帳號"
                        name="username"
                        value={loginData.username}
                        onChange={inputChange}
                        fullWidth
                        sx={styles.input}
                    />
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
                    {/* FIXME custom color dark mode can not be seen */}
                    <FormControlLabel control={<Checkbox />} label="保持登入" />
                    <ArrowButton onClick={loginAuth}></ArrowButton>
                </Form>
            </div>
        </>
    );
};

export default Login;
