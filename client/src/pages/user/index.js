import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Container, Typography, useMediaQuery, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import ProfileContent from "./components/ProfileContent";
import { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { useAuth } from "../../hooks/AuthContext";
const User = () => {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState([{}]);
    useEffect(() => {
        UserService.userProfile(currentUser.username).then((res) => {
            setProfile(res.data);
        });
    }, []);

    return (
        <Container maxWidth="lg">
            <Stack direction={{ md: "row", sm: "column" }} spacing={4} justifyContent="space-between">
                <LeftBar profile={profile} />
                <ProfileContent />
                {/* <RightBar /> */}
            </Stack>
        </Container>
    );
};

export default User;
