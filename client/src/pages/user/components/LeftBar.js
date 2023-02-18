import React from "react";
import { Box, Stack, Avatar, Typography, Divider, Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { TealButton } from "./TealButton";
import EditIcon from "@mui/icons-material/Edit";

const LeftBar = () => {
    return (
        <Box flex={2} p={2}>
            <Stack direction="column" spacing={2} alignItems="center" pt={5}>
                <Avatar alt="profile_image" src="/static/images/avatar/1.jpg" sx={{ width: 300, height: 300 }} />
                <Typography variant="h3" fontWeight={600} color="initial">
                    Fullname
                </Typography>
                <Typography variant="h4" color="initial">
                    qazwsx521943
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit" href="/">
                        Followers
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="/material-ui/getting-started/installation/">
                        following
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    </Link>
                </Breadcrumbs>
                <TealButton endIcon={<EditIcon />} fullWidth>
                    編輯自介
                </TealButton>
            </Stack>
        </Box>
    );
};

export default LeftBar;
