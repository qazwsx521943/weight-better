import React from "react";
import { styled } from "@mui/material/styles";
import { Badge, Avatar, Stack, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/AuthContext";
import UserService from "@/pages/services/user.service";
const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

//

const RemoveAvatarBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.neutral.main,
    borderRadius: "20px",
    fontSize: "12px",
    scale: "0.8",
}));

const AvatarBar = ({ username, profile_image, setFollowStatus, followClose }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const unfollowUser = (username) => {
        UserService.userUnfollow(username, currentUser.id);
        setFollowStatus(false);
    };
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" width={"100%"}>
            <Stack direction={"row"} spacing={2} justifyContent="space-between">
                <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
                    <Avatar alt="Remy Sharp" src={profile_image} />
                </StyledBadge>
                <Typography
                    variant="h6"
                    color="black.main"
                    mt={2}
                    lineHeight="40px"
                    onClick={() => {
                        followClose();
                        navigate(`/${username}`);
                    }}
                    sx={{ "&:hover": { cursor: "pointer" } }}>
                    {username}
                </Typography>
            </Stack>
            <RemoveAvatarBtn
                variant="outlined"
                align="end"
                onClick={() => {
                    unfollowUser(username);
                }}>
                移除
            </RemoveAvatarBtn>
        </Stack>
    );
};

export default AvatarBar;
