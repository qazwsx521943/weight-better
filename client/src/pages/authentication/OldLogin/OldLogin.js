import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthWrapper from "../AuthWrapper";
import AuthService from "@/pages/services/auth.service";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useAuth } from "../../../hooks/AuthContext";

const Login = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [message, setMessage] = useState();

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
            auth.userLogin(AuthService.getCurrentUser());
            // setCurrentUser(AuthService.getCurrentUser());
            navigate(`/${response.data.username}`);
        } catch (e) {
            setMessage(e.response.data);
        }
    };
    return (
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
    );
};

export default Login;
