import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function Profile() {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Header title="基本資料" subtitle="" />
            </Box>
        </Box>
    );
}

export default Profile;
