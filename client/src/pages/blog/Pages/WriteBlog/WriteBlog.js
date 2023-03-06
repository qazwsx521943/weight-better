import { Typography } from "@mui/material";
import React from "react";
import Form from "../../Components/Form";
import Header from "../../Components/Header";

function WriteBlog() {
    return (
        <div>
            <Header title="Blog" />
            <Typography
                variant="h4"
                gutterBottom
                component="h1"
                align="center"
                style={{ padding: "20px", color: "red" }}
            >
                發表文章
            </Typography>
            <Form />
        </div>
    );
}

export default WriteBlog;
