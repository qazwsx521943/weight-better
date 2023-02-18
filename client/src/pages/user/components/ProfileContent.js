import { Box } from "@mui/material";
import React from "react";
import TabNav from "./Tabs";

const ProfileContent = ({ currentUser, setCurrentUser }) => {
    return (
        <Box flex={4} p={2}>
            <TabNav currentUser={currentUser} setCurrentUser={setCurrentUser}></TabNav>
        </Box>
    );
};

export default ProfileContent;
