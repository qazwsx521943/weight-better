import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../../Components/FeaturedPost";
import axios from "axios";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import RandomPost from "../../Components/RandomPost";

const CATEGORY_MAP = {
    "latest": "最新文章",
    "fitness": "健身鍛鍊",
    "home-workouts": "居家運動",
    "healthy-eating": "健康飲食",
    "health-wellness": "養生保健",
};

function CategoryPage(props) {
    const { category } = useParams();
    const [posts, setPosts] = useState([]);
    const [randomPost, setRandomPost] = useState(null);

    useEffect(() => {
        if (category === "latest") {
            axios
                .get(`http://localhost:8080/blogs/post/latest`)
                .then((response) => {
                    setPosts(response.data.slice(0,9));
                    const randomIndex = Math.floor(
                        Math.random() * response.data.length
                    );
                    setRandomPost(response.data[randomIndex]);
                })
                .catch((error) => console.error(error));
        } else {
            axios
                .get(`http://localhost:8080/blogs/post/category/${category}`)
                .then((response) => setPosts(response.data))
                .catch((error) => console.error(error));
            axios
                .get(
                    `http://localhost:8080/blogs/post/category/${category}/random`
                )
                .then((response) => setRandomPost(response.data))
                .catch((error) => console.error(error));
        }
    }, [category]);

    const categoryText = CATEGORY_MAP[category] || category; // 如果找不到對應的中文名稱，就顯示英文名稱

    return (
        <>
            <Header />
            <Typography
                variant="h4"
                gutterBottom
                component="h1"
                align="center"
                style={{ padding: "20px", color: "red" }}
            >
                {categoryText}
            </Typography>
            {randomPost && (
                <div style={{ margin: "10px 200px" }}>
                    <RandomPost post={randomPost} />
                </div>
            )}
            <Grid container spacing={2} sx={{ padding: '0 230px' }}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <FeaturedPost
                            cardStyle="normalCard"
                            actionAreaStyle="normalActionArea"
                            mediaStyle="normalMedia"
                            contentStyle="normalContent"
                            currentIndex={0}
                            key={post.id}
                            post={post}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default CategoryPage;
