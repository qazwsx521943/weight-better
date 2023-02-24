import { Box, Typography, TextField, Button, IconButton, Alert, Collapse, Stack, Divider, Chip } from "@mui/material";
import React from "react";
import { Link, useSearchParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthWrapper from "./AuthWrapper";
import AuthService from "@/pages/services/auth.service";
import ArrowButton from "./ArrowButton/ArrowButton";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { signInWithGoogle } from "../../Firebase";

const Login = () => {
    // const fetchAuthUser = async () => {
    //     const response = await axios.get(process.env.REACT_APP_API_KEY + "/auth/user", { withCredentials: true }).catch((err) => {
    //         console.log("沒有權限");
    //     });
    //     if (response) {
    //         userLogin(response.data);
    //     }
    // };
    let [params] = useSearchParams();
    const navigate = useNavigate();
    const { currentUser, userLogin } = useAuth();
    const [message, setMessage] = useState();
    const [open, setOpen] = useState(false);
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
            if (response.data.error) {
                setMessage(response.data.error);
                return;
            }
            localStorage.setItem("user", JSON.stringify(response.data));
            // window.alert("登入成功 重新導向首頁");
            userLogin(AuthService.getCurrentUser());

            navigate(`/${response.data.username}`);
            // setCurrentUser(AuthService.getCurrentUser());
        } catch (e) {
            setMessage(e.response.data);
        }
    };
    const googleLogin = async () => {
        AuthService.googleLogin().then((res) => {
            let token = params.get("token");
            // console.log(token);
        });
    };

    if (currentUser) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Collapse in={open}>
                <Alert severity="success" color="teal">
                    成功登入！
                </Alert>
            </Collapse>
            <AuthWrapper>
                <Typography variant="h2" color="initial" fontWeight="500">
                    登入
                </Typography>
                <TextField
                    margin="normal"
                    variant="outlined"
                    placeholder="帳號"
                    label="帳號"
                    name="username"
                    value={loginData.username}
                    onChange={inputChange}
                />
                <TextField
                    margin="normal"
                    type={"password"}
                    variant="outlined"
                    placeholder="密碼"
                    label="密碼"
                    name="password"
                    value={loginData.password}
                    onChange={inputChange}
                />
                {message && <p style={{ color: "red" }}>{message}</p>}
                <br />
                <Stack direction="row" spacing={2}>
                    <IconButton aria-label="" onClick={AuthService.githubLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43px" height="43px" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </IconButton>
                    <Divider variant="middle" orientation="vertical" />
                    <IconButton aria-label="" onClick={googleLogin}>
                        <img src="/googleSignIn.png" alt="" width={"45px"} height="45px" style={{ overflow: "hidden" }} />
                    </IconButton>
                </Stack>

                <ArrowButton onClick={loginAuth} />
                <div className="flex flex-row">
                    <Link to="/register" className="text-gray">
                        建立帳號？
                    </Link>
                    <Divider orientation="vertical" />
                    <Link to="/forgot" className="text-gray">
                        找回密碼？
                    </Link>
                </div>
            </AuthWrapper>
        </>
    );
};

export default Login;
