import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import Logo from "@/assets/WB3.png";
import FlexColBox from "@/components/FlexBox/FlexColBox";

const AuthWrapper = ({ children }) => {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <div>
                <FlexColBox maxWidth={400} margin={"auto"} marginTop={8} padding={3} borderRadius={1} boxShadow={"5px 5px 10px #ccc"}>
                    {children}
                </FlexColBox>
            </div>
        </Box>
    );
};

export default AuthWrapper;
