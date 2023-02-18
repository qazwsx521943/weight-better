import React from "react";
import { Typography } from "@mui/material";

const Title = (props) => {
    return (
        <>
            <Typography variant="h2" mb={5} color="black.main" fontWeight="400">
                {props.children}
            </Typography>
            {props.subtitle && (
                <Typography variant="h5" color="black.main" mb={4}>
                    {props.subtitle}
                </Typography>
            )}
        </>
    );
};

export default Title;
