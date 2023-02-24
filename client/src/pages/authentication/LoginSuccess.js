import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const LoginSuccess = () => {
    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1000);
    });
    return (
        <div>
            成功登入！
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        </div>
    );
};

export default LoginSuccess;
