import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../../Components/FeaturedPost";
import axios from "axios";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import RandomPost from "../../Components/RandomPost";
import CardList from "../../Components/CardList";

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
                    const posts = response.data.map(post => {
                        return {
                          ...post,
                          author_fullname: post.author_fullname || 'Unknown'
                        };
                      });
                    setPosts(posts);
                    const randomIndex = Math.floor(
                        Math.random() * response.data.length
                    );
                    setRandomPost(response.data[randomIndex]);
                })
                .catch((error) => console.error(error));
        } else {
            axios
                .get(`http://localhost:8080/blogs/post/category/${category}`)
                .then((response) => {
                    const posts = response.data.map(post => {
                      return {
                        ...post,
                        author_fullname: post.author_fullname || 'Unknown'
                      };
                    });
                    setPosts(posts);
                  })
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
                variant="h2"
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
            <Typography
                variant="h4"
                gutterBottom
                component="h1"
                align="center"
                style={{ padding: "20px", color: "red" }}
            >
                熱門話題
            </Typography>
            <Grid container spacing={2} sx={{ padding: "0 230px" }}>
                {posts.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} md={4}>
                        <FeaturedPost
                            cardStyle="normalCard"
                            actionAreaStyle="normalActionArea"
                            mediaStyle="normalMedia"
                            contentStyle="normalContent"
                            key={post.id}
                            post={post}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        component="h1"
                        style={{ padding: "20px", color: "red" }}
                    >
                        所有文章
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CardList posts={posts} />
                </Grid>
            </Grid>
        </>
    );
}

export default CategoryPage;
