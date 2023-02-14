import React from "react";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
// components
import Form from "../global/Form";
import Gallery from "./components/Gallery";
import ArrowButton from "./components/ArrowButton/ArrowButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
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
        axios
            .post("http://localhost:8080/user/login", loginData)
            .then((res) => {
                console.log(res.data);
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
