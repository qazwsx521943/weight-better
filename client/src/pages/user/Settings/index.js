import React, { useEffect, useState } from "react";
import SettingList from "./SettingList";
import { Outlet } from "react-router-dom";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { Container, Grid } from "@mui/material";
import jwt_decode from "jwt-decode";

const Settings = () => {
    const user = jwt_decode(AuthService.getCurrentUser().token);

    useEffect(() => {}, []);
    return (
        <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <SettingList user={user} />
                </Grid>
                <Grid item xs={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Settings;
