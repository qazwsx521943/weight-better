import {
    Divider,
    Tabs,
    Tab,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Container,
    Button,
    CardActions,
    IconButton,
} from "@mui/material";

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Reels = () => {
    const [video, setVideo] = useState("own");
    const handleChange = (e, newValue) => {
        setVideo(newValue);
    };
    return (
        <Box>
            <Box display={"flex"} sx={{ width: "100%" }} justifyContent="center">
                <Tabs
                    value={video}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example">
                    <Tab value="own" label="我的影片" />
                    <Tab value="collection" label="我的收藏" />
                </Tabs>
            </Box>
            <br />
            <Divider variant="middle" />
            <Container sx={{ py: 4 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "12px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 1:1
                                        aspectRatio: "1 / 1",
                                    }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography variant="body3">This is a media card.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                    <IconButton aria-label="刪除">
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Reels;
