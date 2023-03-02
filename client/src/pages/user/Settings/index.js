import React, { useEffect, useState } from "react";
import SettingList from "./SettingList";
import { Outlet } from "react-router-dom";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { Container, Grid } from "@mui/material";
import jwt_decode from "jwt-decode";
import { useAuth } from "@/hooks/AuthContext";

const Settings = () => {
    const { currentUser } = useAuth();

    return (
        <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
            <Grid container spacing={2}>
                <Grid item xs={2} md={3} lg={2}>
                    <SettingList user={currentUser} />
                </Grid>
                <Grid item xs={10} md={9} lg={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Settings;
