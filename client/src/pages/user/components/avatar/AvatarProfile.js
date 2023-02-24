import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
const AvatarProfile = ({ user }) => {
    return (
        <Stack direction={"row"} alignItems="center" spacing={2}>
            <Avatar alt="Avatar" src={user?.profile_image} sx={{ width: 56, height: 56 }} />
            <Stack>
                <Typography variant="h4" color="initial">
                    {user?.username}
                </Typography>
                <Typography variant="h6" color="initial">
                    {user?.fullname}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default AvatarProfile;
