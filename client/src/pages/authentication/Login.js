import { Box, Typography, TextField, Button, IconButton, Alert, Collapse } from "@mui/material";
import React from "react";
import { Link, useSearchParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import AuthWrapper from "./AuthWrapper";
import AuthService from "@/pages/services/auth.service";
import ArrowButton from "./ArrowButton/ArrowButton";
import { useAuth } from "../../hooks/AuthContext";

const Login = () => {
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

                <ArrowButton onClick={loginAuth} />
                <div className="flex flex-row">
                    <Link to="/register" className="text-gray">
                        建立帳號？
                    </Link>
                    <Link to="/forgot" className="text-gray">
                        找回密碼？
                    </Link>
                </div>
            </AuthWrapper>
        </>
    );
};

export default Login;
