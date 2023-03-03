import React from "react";
import AuthService from "@/pages/services/auth.service";
// hooks
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/system";
// components
import { Box, TextField, Stack, Button } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import FlexColBox from "@/components/FlexBox/FlexColBox";
import AuthHeader from "../AuthHeader";
import RegisterSuccess from "../RegisterSuccess";

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: 5,
    size: "small",
    "& .MuiFormHelperText-root": { color: "red" },
}));

const RegisterForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formError, setFormError] = useState(true);
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

    const handleNextStep = () => {
        setStep((step) => step + 1);
    };

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
        await AuthService.register({ username, password, fullname, birth_date, email }).then((res) => {
            handleNextStep();
            console.log(res.data);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexColBox sx={{ justifyContent: "start" }} marginY={5}>
                {step === 1 && (
                    <>
                        <AuthHeader subtitle="可以填寫真名也可以保持神秘。">你的名字是？</AuthHeader>
                        <StyledTextField
                            key="1"
                            label="姓名"
                            size="small"
                            type="text"
                            {...register("fullname")}
                            helperText={errors.fullname?.message}
                        />
                    </>
                )}

                {step === 2 && (
                    <>
                        <AuthHeader>你的 Email 是什麼？</AuthHeader>
                        <StyledTextField
                            key="2"
                            label="電子郵件"
                            size="small"
                            type="text"
                            placeholder="Email..."
                            {...register("email")}
                            helperText={errors.email?.message}
                        />
                    </>
                )}

                {step === 3 && (
                    <>
                        <AuthHeader subtitle="取個讓人好記的帳號八">請輸入帳號</AuthHeader>
                        <StyledTextField
                            key="3"
                            label="帳號名稱"
                            size="small"
                            type="text"
                            placeholder="Username"
                            {...register("username")}
                            helperText={errors.username?.message}
                        />
                    </>
                )}
                {step === 4 && (
                    <>
                        <AuthHeader subtitle="飲食健康有助於密碼記憶">請輸入密碼</AuthHeader>
                        <StyledTextField
                            key="4"
                            label="密碼"
                            size="small"
                            type="password"
                            placeholder="password"
                            {...register("password")}
                            helperText={errors.password?.message}
                        />
                        <StyledTextField
                            key="5"
                            label="再次確認密碼"
                            size="small"
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmpassword")}
                            helperText={errors.confirmpassword?.message}
                        />
                    </>
                )}
                {step === 5 && (
                    <>
                        <AuthHeader subtitle="讓我們算算你幾歲了。">請輸入你的出生年月日</AuthHeader>
                        <StyledTextField label="" size="small" type="date" {...register("birth_date")} />
                    </>
                )}
                {step === 6 && (
                    <>
                        <RegisterSuccess />
                        <Button variant="outlined" size="large" onClick={() => navigate("/login")}>
                            立即登入
                        </Button>
                    </>
                )}
                {step < 5 && <ArrowButton type="button" onClick={handleNextStep}></ArrowButton>}
                {step === 5 && <ArrowButton type="submit"></ArrowButton>}
            </FlexColBox>
        </form>
    );
};

export default RegisterForm;
