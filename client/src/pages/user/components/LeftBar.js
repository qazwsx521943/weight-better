import React from "react";
import { Box, Stack, Avatar, Typography, Divider, Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { TealButton } from "./TealButton";
import EditIcon from "@mui/icons-material/Edit";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import PopupModal from "./PopupModal";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/AuthContext";
import AvatarBar from "./avatar/AvatarBar";
import UserService from "@/pages/services/user.service";
import { useParams } from "react-router-dom";

const fakeData = [
    { username: "jon", profile_image: "https://source.unsplash.com/random" },
    { username: "jon", profile_image: "https://source.unsplash.com/random" },
    { username: "jon", profile_image: "https://source.unsplash.com/random" },
];

const LeftBar = () => {
    const params = useParams();
    const { currentUser } = useAuth();
    // 追蹤modal states
    const [fanOpenState, setfanOpenState] = useState(false);
    const fanOpen = () => setfanOpenState(true);
    const fanClose = () => setfanOpenState(false);
    const [followOpenState, setfollowOpenState] = useState(false);
    const followOpen = () => setfollowOpenState(true);
    const followClose = () => setfollowOpenState(false);
    // leftbar information states
    const [user, setUser] = useState({});
    const [following, setFollowing] = useState();
    const [followers, setFollowers] = useState();

    // fetch page user info
    const usernameParams = params.username;
    useEffect(() => {
        UserService.userProfile(usernameParams).then((res) => {
            setUser(res.data[0]);
            setFollowing(res.data[1]);
            setFollowers(res.data[2]);
        });
    }, [usernameParams]);

    return (
        <Box flex={1} p={2}>
            <Stack direction="column" spacing={2} alignItems="center" pt={5}>
                <Avatar alt="profile_image" src="/static/images/avatar/1.jpg" sx={{ width: 300, height: 300 }} />
                <Typography variant="h3" fontWeight={600} color="initial">
                    {user.fullname}
                </Typography>
                <Typography variant="h4" color="initial">
                    {user.username}
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Box>
                        <Typography onClick={fanOpen} sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer" } }}>
                            <PeopleIcon sx={{ mr: 1 }} fontSize="inherit" />
                            {followers} 位粉絲
                        </Typography>
                        <PopupModal handleClose={fanClose} open={fanOpenState} title="粉絲">
                            忠實的粉絲們
                        </PopupModal>
                    </Box>
                    <Box>
                        <Typography onClick={followOpen} sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer" } }}>
                            {following} 追蹤中
                            {/* <WhatshotIcon sx={{ ml: 0.5 }} fontSize="inherit" /> */}
                        </Typography>
                        <PopupModal handleClose={followClose} open={followOpenState} title="追蹤中">
                            {fakeData.map((fan, i) => (
                                <AvatarBar key={i} username={fan.username} profile_image={fan.profile_image}></AvatarBar>
                            ))}
                        </PopupModal>
                    </Box>
                </Breadcrumbs>
                {currentUser.username === usernameParams && (
                    <TealButton endIcon={<EditIcon />} fullWidth>
                        編輯自介
                    </TealButton>
                )}
                {currentUser.username !== usernameParams && (
                    <TealButton endIcon={<PersonAddIcon />} fullWidth>
                        Follow
                    </TealButton>
                )}
            </Stack>
        </Box>
    );
};

export default LeftBar;
