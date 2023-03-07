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
import FavoriteIcon from "@mui/icons-material/Favorite";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Favorites = () => {
    const [video, setVideo] = useState("own");

    const handleChange = (e, newValue) => {
        setVideo(newValue);
    };
    return (
        <Box>
            <Typography align="center" variant="h3" fontWeight={600} color="teal.main">
                最愛商品列表
            </Typography>
            <br />
            <Divider variant="middle" />
            <Container sx={{ py: 4 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={2}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "4px",
                                    position: "relative",
                                }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 1:1
                                        height: "140px",
                                    }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                {/* <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography variant="body3">This is a media card.</Typography>
                                </CardContent> */}
                                <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Button size="small">查看更多</Button>
                                    <IconButton aria-label="刪除">
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                                <IconButton
                                    aria-label="最愛"
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        top: "5px",
                                        right: "5px",
                                        backgroundColor: "whitesmoke",
                                    }}>
                                    <FavoriteIcon color="pink" />
                                </IconButton>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Favorites;
