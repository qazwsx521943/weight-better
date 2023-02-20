import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
    return (
        <Box flex={1} bgcolor="teal.main" p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            RightBar
        </Box>
    );
};

export default RightBar;
