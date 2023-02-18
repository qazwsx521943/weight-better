import { Button, styled } from "@mui/material";

export const TealButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: theme.palette.teal.main,
    "&:hover": {
        backgroundColor: theme.palette.pink.main,
    },
    "&:disabled": {
        backgroundColor: theme.palette.teal.light,
    },
}));
