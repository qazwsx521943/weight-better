import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Container, Typography, useMediaQuery, Stack } from "@mui/material";

import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import ProfileContent from "./components/ProfileContent";
const User = ({ currentUser, setCurrentUser }) => {
    return (
        <Container maxWidth="lg">
            <Stack direction={{ md: "row", sm: "column" }} spacing={4} justifyContent="space-between">
                <LeftBar />
                <ProfileContent currentUser={currentUser} setCurrentUser={setCurrentUser} />
                {/* <RightBar /> */}
            </Stack>
        </Container>
    );
};

export default User;
