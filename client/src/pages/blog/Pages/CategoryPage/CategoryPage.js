import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../../Components/FeaturedPost";
import axios from "axios";
import Header from "../../Components/Header";
function CategoryPage(props) {
    const { category } = props;
  
    const [posts, setPosts] = useState([]);
    const [randomPost, setRandomPost] = useState(null);
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/blogs/post/${"fitness"}`)
        .then((response) => setPosts(response.data))
        .catch((error) => console.error(error));
  
      axios
        .get(`http://localhost:8080/blogs/${"fitness"}/random`)
        .then((response) => setRandomPost(response.data))
        .catch((error) => console.error(error));
    }, [category]);
  
    return (
      <>
        <Header />
        <Typography variant="h4" gutterBottom component="h1">
          {category}
        </Typography>
        {randomPost && <FeaturedPost post={randomPost} />}
        <Grid container spacing={4}>
          {posts.map((post) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </Grid>
      </>
    );
  }

export default CategoryPage;
