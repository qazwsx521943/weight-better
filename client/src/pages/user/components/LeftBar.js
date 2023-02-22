// hooks
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/AuthContext";
import { useParams } from "react-router-dom";
import UserService from "@/pages/services/user.service";
// components
import { Box, Stack, Avatar, Typography, Breadcrumbs, IconButton, Snackbar, Alert } from "@mui/material";
import PopupModal from "./PopupModal";
import AvatarBar from "./avatar/AvatarBar";
import { TealButton } from "./TealButton";
// icons
import EditIcon from "@mui/icons-material/Edit";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Close } from "@mui/icons-material";

const LeftBar = () => {
    const params = useParams();
    const { currentUser } = useAuth();
    // modal states
    const [fanOpenState, setfanOpenState] = useState(false);
    const fanOpen = () => setfanOpenState(true);
    const fanClose = () => setfanOpenState(false);
    const [followOpenState, setfollowOpenState] = useState(false);
    const followOpen = () => setfollowOpenState(true);
    const followClose = () => setfollowOpenState(false);
    // leftbar information states
    const [user, setUser] = useState({});
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [followStatus, setFollowStatus] = useState();
    const [openAlert, setOpenAlert] = useState(false);

    // fetch page user info
    const usernameParams = params.username;
    // FIXME infinite rerendering
    useEffect(() => {
        UserService.userProfile(usernameParams).then((res) => {
            setUser(res.data[0]);
        });
        UserService.userFollowing(usernameParams).then((res) => {
            setFollowing(res.data);
        });
        UserService.userFollowers(usernameParams).then((res) => {
            setFollowers(res.data);
            setFollowStatus(res.data.filter((fan) => fan.follower_id === currentUser.id).length === 1 ? true : false);
        });
    }, [followStatus, currentUser.id, usernameParams, user.profile_image]);

    // 點擊follow / unfollow
    const followUser = (e) => {
        UserService.userFollow(usernameParams, currentUser.id).then((res) => {
            setFollowStatus(!followStatus);
            setOpenAlert(true);
        });
    };

    // modal unfollow
    const unfollowUser = (username) => {
        UserService.userFollow(username, currentUser.id);
        setFollowing(following.filter((follow) => follow.username !== username));
    };

    // 換大頭貼
    const avatarChange = (e) => {
        // setProfile_image(e.target.files[0]);
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        UserService.userAvatar(currentUser.username, formData).then((res) => {
            setUser({ ...user, profile_image: res.toString() });
        });
    };

    const deleteFan = (username) => {
        UserService.userDelFan(username, currentUser.id);
        setFollowers(followers.filter((fan) => fan.username !== username));
    };

    // const checkFollowStatus = followers.filter((fan) => fan.follower_id === currentUser.id).length;
    // console.log(checkFollowStatus);
    return (
        <Box flex={1} p={2}>
            {currentUser.username !== usernameParams && (
                <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openAlert} autoHideDuration={2000}>
                    <Alert severity="success" sx={{ width: "100%" }}>
                        {followStatus && `正在追蹤${usernameParams}`}
                        {!followStatus && `已取消追蹤${usernameParams}`}
                    </Alert>
                </Snackbar>
            )}
            <Stack direction="column" spacing={2} alignItems="center" pt={5}>
                <Box position={"relative"}>
                    <Avatar alt="profile_image" src={user.profile_image} sx={{ width: 300, height: 300 }} />
                    {currentUser.username === usernameParams && (
                        <IconButton
                            size="large"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            sx={{ position: "absolute", bottom: "10%", right: "10%", "&:hover": { bgcolor: "teal.main" } }}>
                            <input hidden accept="image/*" type="file" onChange={avatarChange} />
                            <CameraAltIcon fontSize="inherit" color="teal" sx={{ "&:hover": { color: "whitesmoke" } }} />
                        </IconButton>
                    )}
                </Box>
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
                            {followers.length} 位粉絲
                        </Typography>
                        <PopupModal handleClose={fanClose} open={fanOpenState} title="粉絲">
                            {followers.map((follow, i) => (
                                <AvatarBar
                                    key={i}
                                    username={follow.username}
                                    profile_image={follow.profile_image}
                                    situation={"fan"}
                                    // setFollowStatus={setFollowStatus}
                                    deleteFan={deleteFan}
                                    followClose={fanClose}></AvatarBar>
                            ))}
                        </PopupModal>
                    </Box>
                    <Box>
                        <Typography onClick={followOpen} sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer" } }}>
                            {following.length} 追蹤中
                        </Typography>
                        <PopupModal handleClose={followClose} open={followOpenState} title="追蹤中">
                            {following.map((fan, i) => (
                                <AvatarBar
                                    key={i}
                                    username={fan.username}
                                    profile_image={fan.profile_image}
                                    setFollowStatus={setFollowStatus}
                                    unfollowUser={unfollowUser}
                                    situation={"following"}
                                    followClose={followClose}></AvatarBar>
                            ))}
                        </PopupModal>
                    </Box>
                </Breadcrumbs>
                {currentUser.username === usernameParams && (
                    <TealButton endIcon={<EditIcon />} fullWidth>
                        編輯自介
                    </TealButton>
                )}
                {currentUser.username !== usernameParams && !followStatus && (
                    <TealButton onClick={followUser} endIcon={<PersonAddIcon />} fullWidth>
                        Follow
                    </TealButton>
                )}
                {currentUser.username !== usernameParams && followStatus && (
                    <TealButton onClick={followUser} endIcon={<PersonRemoveIcon />} fullWidth>
                        unFollow
                    </TealButton>
                )}
            </Stack>
        </Box>
    );
};

export default LeftBar;
