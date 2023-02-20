import FlexColBox from "@/components/FlexBox/FlexColBox";
import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/system";

const Styledp = styled("p")(({ theme }) => ({
    color: theme.palette.pink.main,
}));

const RegisterForm = () => {
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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box height="100vh" justifyContent={"center"} display="flex" alignItems={"center"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FlexColBox>
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

                    <input type="submit" />
                </FlexColBox>
            </form>
        </Box>
    );
};

export default RegisterForm;
