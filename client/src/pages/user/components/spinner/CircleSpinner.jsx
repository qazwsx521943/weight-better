import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircleSpinner() {
    return (
        <Box sx={{ display: "flex" }}>
            <CircularProgress color="white" size={20} />
        </Box>
    );
}
