import React from "react";
import { Box, Stack, Avatar, Typography, Divider, Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { TealButton } from "./TealButton";
import EditIcon from "@mui/icons-material/Edit";
import FlexBox from "@/components/FlexBox/FlexBox";
import PopupModal from "./PopupModal";
import { useState } from "react";

const LeftBar = () => {
    const [fanOpenState, setfanOpenState] = useState(false);
    const fanOpen = () => setfanOpenState(true);
    const fanClose = () => setfanOpenState(false);
    const [followOpenState, setfollowOpenState] = useState(false);
    const followOpen = () => setfollowOpenState(true);
    const followClose = () => setfollowOpenState(false);
    return (
        <Box flex={1} p={2}>
            <Stack direction="column" spacing={2} alignItems="center" pt={5}>
                <Avatar alt="profile_image" src="/static/images/avatar/1.jpg" sx={{ width: 300, height: 300 }} />
                <Typography variant="h3" fontWeight={600} color="initial">
                    Fullname
                </Typography>
                <Typography variant="h4" color="initial">
                    qazwsx521943
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography onClick={fanOpen} sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer" } }}>
                        Followers
                        <HomeIcon sx={{ ml: 0.5 }} fontSize="inherit" />
                    </Typography>
                    <PopupModal handleClose={fanClose} open={fanOpenState} title="粉絲">
                        忠實的粉絲們
                    </PopupModal>
                    <Typography onClick={followOpen} sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer" } }}>
                        following
                        <WhatshotIcon sx={{ ml: 0.5 }} fontSize="inherit" />
                    </Typography>
                    <PopupModal handleClose={followClose} open={followOpenState} title="追蹤中">
                        已追蹤偶像
                    </PopupModal>
                </Breadcrumbs>
                <TealButton endIcon={<EditIcon />} fullWidth>
                    編輯自介
                </TealButton>
            </Stack>
        </Box>
    );
};

export default LeftBar;
