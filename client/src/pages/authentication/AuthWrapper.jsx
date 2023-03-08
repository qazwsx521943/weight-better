import React from "react";
import { Box, Grid, Typography, styled, Paper } from "@mui/material";
import Logo from "@/assets/WB3.png";
import FlexColBox from "@/components/FlexBox/FlexColBox";
import background from "@/assets/background.jpg";

const AuthWrapper = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `url(${'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'})`,
                // backgroundColor: "purple",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: 10,
            }}>
            <FlexColBox
                maxWidth={400}
                margin={"auto"}
                padding={3}
                borderRadius={1}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{ position: "relative", background: "white" }}>
                {children}
            </FlexColBox>
        </Box>
    );
};

export default AuthWrapper;
