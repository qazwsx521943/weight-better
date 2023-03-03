import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Container, Typography, useMediaQuery, Stack, Box, AppBar } from "@mui/material";
import { Outlet, useSearchParams, useNavigate, Link, useParams, useLocation } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import { useState, useEffect } from "react";
import UserService from "@/pages/services/user.service";
import { useAuth } from "@/hooks/AuthContext";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const tabs = [
    { title: "基本資料", value: "profile" },
    { title: "我的影片", value: "reels" },
    { title: "最愛商品", value: "favorites" },
    { title: "我的菜單", value: "menu" },
    { title: "歷史訂單", value: "orders" },
];

const ProfileLayout = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser } = useAuth();
    const [hasUser, setHasUser] = useState();
    // tab selection
    const userParams = params.username;
    const [selectedTab, setSelectedTab] = useState();
    const currentLocation = location.pathname.split("/")[2] || "profile";
    useEffect(() => {
        UserService.userProfile(userParams).then((res) => {
            res.data.error ? setHasUser(false) : setHasUser(true);
        });
        setSelectedTab(currentLocation);
    }, [userParams]);
    const handleChange = (e, newValue) => {
        setSelectedTab(newValue);
        if (newValue === "profile") {
            navigate(`/${userParams}`);
            return;
        }
        navigate(`/${userParams}/${newValue}`);
    };

    return (
        <Container maxWidth="lg">
            {!hasUser && <Box>沒人啦</Box>}
            {hasUser && (
                <Stack direction={{ md: "row", sm: "column" }} spacing={4} justifyContent="space-between">
                    <LeftBar />
                    <Box flex={5} p={2}>
                        <Box sx={{ width: "100%" }} position="static">
                            <Tabs
                                centered
                                defaultValue={"profile"}
                                value={selectedTab}
                                onChange={handleChange}
                                textColor="primary"
                                indicatorColor="primary">
                                {tabs.map((tab, i) => (
                                    <Tab key={i} label={tab.title} value={tab.value} />
                                ))}
                            </Tabs>
                        </Box>

                        <Outlet />
                    </Box>
                </Stack>
            )}
        </Container>
    );
};

export default ProfileLayout;
