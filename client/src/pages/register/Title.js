import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "@/Styles/styles";
const Title = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Typography
                variant="h2"
                mb={5}
                color={colors.black[500]}
                fontWeight="400"
            >
                {props.children}
            </Typography>
            {props.subtitle && (
                <Typography variant="h5" color={colors.primary[300]} mb={4}>
                    {props.subtitle}
                </Typography>
            )}
        </>
    );
};

export default Title;
