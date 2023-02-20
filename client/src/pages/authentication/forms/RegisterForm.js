import FlexColBox from "@/components/FlexBox/FlexColBox";
import { Box, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/system";
import AuthService from "@/pages/services/auth.service";
import { useNavigate } from "react-router-dom";
import ArrowButton from "../ArrowButton/ArrowButton";

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: 5,
    size: "small",
    "& .MuiFormHelperText-root": { color: "red" },
}));

const RegisterForm = () => {
    const navigate = useNavigate();
    // 前端 yup 驗證
    const schema = yup.object().shape({
        fullname: yup.string().required("姓名是必須滴！"),
        email: yup.string().email("須為有效地址！").required(),
        username: yup.string().min(6, "帳號長度需至少6碼！").required(),
        password: yup.string().min(6, "密碼長度需至少6碼！").max(20, "不可以超過20碼！").required(),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "兩次輸入的密碼要一致！")
            .required(),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const { username, password, fullname, birth_date, email } = data;
        AuthService.register({ username, password, fullname, birth_date, email }).then(() => {
            window.alert("註冊成功");
            navigate("/login");
        });
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexColBox sx={{ justifyContent: "start" }}>
                <StyledTextField label="姓名" size="small" type="text" {...register("fullname")} helperText={errors.fullname?.message} />
                <StyledTextField
                    label="電子郵件"
                    size="small"
                    type="text"
                    placeholder="Email..."
                    {...register("email")}
                    helperText={errors.email?.message}
                />
                <StyledTextField
                    label="帳號名稱"
                    size="small"
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                    helperText={errors.username?.message}
                />
                <StyledTextField
                    label="密碼"
                    size="small"
                    type="password"
                    placeholder="password"
                    {...register("password")}
                    helperText={errors.password?.message}
                />
                <StyledTextField
                    label="再次確認密碼"
                    size="small"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmpassword")}
                    helperText={errors.confirmpassword?.message}
                />
                <StyledTextField label="出生年月日" size="small" type="date" {...register("birth_date")} />
                {/* <input type="submit" /> */}
                <ArrowButton type="submit"></ArrowButton>
            </FlexColBox>
        </form>
    );
};

export default RegisterForm;
