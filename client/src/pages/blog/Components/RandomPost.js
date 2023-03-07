import React from "react";
import { Paper, Typography, Grid, CardMedia } from "@mui/material";

function RandomPost(props) {
    const { image, title, description } = props.post;

    return (
        <Grid container spacing={2} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={7} sx={{ flex: 1 }}>
                <CardMedia
                    component="img"
                    src={image}
                    sx={{ display: "block", width: "700px", height: "400px" }}
                />
            </Grid>
            <Grid item xs={12} sm={5} sx={{ flex: 1 }}>
                <Paper
                    elevation={3}
                    style={{
                        padding: "16px",
                        height: "300px",
                        width:"400px",
                        position: "relative",
                        left: "-50px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        gutterBottom
                    >
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default RandomPost;
