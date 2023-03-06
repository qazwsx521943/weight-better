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
                backgroundImage: `url(${background})`,
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
