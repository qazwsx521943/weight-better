import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import { Divider, Typography } from "@mui/material";

const sections = [
    { title: "最新文章", url: "#" },
    { title: "健身鍛鍊", url: "#" },
    { title: "居家運動", url: "#" },
    { title: "健康飲食", url: "#" },
    { title: "養生保健", url: "#" },
];

// const mainFeaturedPost = {
//     title: "原來運動可以不用這麼辛苦？",
//     description: "享受運動，維持身心健康，讓運動成為生活中的一部分。",
//     image: "https://source.unsplash.com/random/?workout",
//     imageText: "main image description",
//     // linkText: 'Continue reading…',
// };

const posts = [post1, post2, post3];

const sidebar = {
    title: "About",
    description:
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [
        { title: "March 2020", url: "#" },
        { title: "February 2020", url: "#" },
        { title: "January 2020", url: "#" },
        { title: "November 1999", url: "#" },
        { title: "October 1999", url: "#" },
        { title: "September 1999", url: "#" },
        { title: "August 1999", url: "#" },
        { title: "July 1999", url: "#" },
        { title: "June 1999", url: "#" },
        { title: "May 1999", url: "#" },
        { title: "April 1999", url: "#" },
    ],
    social: [
        { name: "GitHub", icon: GitHubIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "Facebook", icon: FacebookIcon },
    ],
};

export default function Blog() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:8080/blogs")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <>
            <Header title="Blog" sections={sections} />
            {posts.slice(6, 7).map((post) => (
                <MainFeaturedPost post={post} />
            ))}

            <Grid container spacing={6}>
                {posts.slice(0, 4).map((post) => (
                    <Grid item>
                        <FeaturedPost
                            cardStyle="normalCard"
                            actionAreaStyle="normalActionArea"
                            mediaStyle="normalMedia"
                            contentStyle="normalContent"
                            currentIndex={0}
                            key={post.title}
                            post={post}
                        />
                    </Grid>
                ))}
                <Grid item xs={4} sx={{ p: 0, my: 3 }}>
                    <Grid container spacing={3}>
                        {posts.slice(4, 5).map((post) => (
                            <Grid item sx={{ p: 0, mr: 3 }}>
                                <FeaturedPost
                                    cardStyle="largeCard"
                                    actionAreaStyle="largeActionArea"
                                    mediaStyle="largeMedia"
                                    contentStyle="largeContent"
                                    currentIndex={0}
                                    post={post}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={8} sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        {posts.slice(0, 3).map((post) => (
                            <Grid item sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
                                    currentIndex={0}
                                    post={post}
                                />
                            </Grid>
                        ))}
                        {posts.slice(0, 3).map((post) => (
                            <Grid item sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
                                    currentIndex={0}
                                    post={post}
                                />
                            </Grid>
                        ))}
                        {posts.slice(0, 3).map((post) => (
                            <Grid item sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
                                    currentIndex={0}
                                    post={post}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main title="From the firehose" posts={posts} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid> */}
            <Grid container>
                <Grid item xs={7}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Grid
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Typography variant="h1" sx={{ my: 3 }}>
                                    熱門文章
                                </Typography>
                                <Divider
                                    sx={{
                                        marginLeft: 1,
                                        height: "100%",
                                        border: "3px solid 6677C8",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            {posts.slice(1, 4).map((post) => (
                                <Grid item sx={{ p: 0, mx: 1 }}>
                                    <FeaturedPost
                                        cardStyle="smallCard"
                                        actionAreaStyle="smallActionArea"
                                        mediaStyle="smallMedia"
                                        contentStyle="smallContent"
                                        currentIndex={0}
                                        post={post}
                                    />
                                </Grid>
                            ))}
                            {posts.slice(1, 4).map((post) => (
                                <Grid item sx={{ p: 0, mx: 1 }}>
                                    <FeaturedPost
                                        cardStyle="smallCard"
                                        actionAreaStyle="smallActionArea"
                                        mediaStyle="smallMedia"
                                        contentStyle="smallContent"
                                        currentIndex={0}
                                        post={post}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={3}>
                        {posts.slice(5, 6).map((post) => (
                            <Grid item sx={{ p: 0, mr: 3 }}>
                                <FeaturedPost
                                    cardStyle="largeCard"
                                    actionAreaStyle="largeActionArea"
                                    mediaStyle="largeMedia"
                                    contentStyle="largeContent"
                                    post={post}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    );
}
