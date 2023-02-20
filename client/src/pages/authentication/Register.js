import React from "react";
import AuthWrapper from "./AuthWrapper";
import RegisterForm from "./forms/RegisterForm";
import Typography from "@mui/material/Typography";

const Register = () => {
    return (
        <AuthWrapper>
            <Typography variant="h3" fontWeight={500} color="initial" marginY={3}>
                註冊
            </Typography>
            <RegisterForm />
        </AuthWrapper>
    );
};

export default Register;
