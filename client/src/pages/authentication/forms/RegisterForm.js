import FlexColBox from "@/components/FlexBox/FlexColBox";
import { Box, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/system";
import AuthService from "@/pages/services/auth.service";
import { useNavigate } from "react-router-dom";

const Styledp = styled("p")(({ theme }) => ({
    color: theme.palette.pink.main,
}));

const RegisterForm = () => {
    const navigate = useNavigate();
    // 前端 yup 驗證
    const schema = yup.object().shape({
        fullname: yup.string().required("姓名是必須滴！"),
        email: yup.string().email().required(),
        username: yup.string().min(6).required(),
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
        // AuthService.register({ username, password, fullname, birth_date, email }).then(() => {
        //     window.alert("註冊成功");
        //     navigate("/login");
        // });
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexColBox>
                {/* <Controller
                    name="fullname"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="姓名"
                            error={!!errors.fullname}
                            helperText={errors.fullname ? errors.fullname?.message : ""}
                        />
                    )}
                /> */}
                <input type="text" placeholder="Full Name" {...register("fullname")} />
                <Styledp>{errors.fullname?.message}</Styledp>
                <input type="text" placeholder="Email..." {...register("email")} />
                <Styledp>{errors.email?.message}</Styledp>
                <input type="text" placeholder="Username" {...register("username")} />
                <Styledp>{errors.username?.message}</Styledp>
                <input type="password" placeholder="password" {...register("password")} />
                <Styledp>{errors.password?.message}</Styledp>
                <input type="password" placeholder="Confirm Password" {...register("confirmpassword")} />
                <Styledp>{errors.confirmpassword?.message}</Styledp>
                <input type="date" placeholder="生日" {...register("birth_date")} />
                <input type="submit" />
            </FlexColBox>
        </form>
    );
};

export default RegisterForm;
