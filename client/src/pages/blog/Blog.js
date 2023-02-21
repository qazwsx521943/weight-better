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

const mainFeaturedPost = {
    title: "原來運動可以不用這麼辛苦？",
    description: "享受運動，維持身心健康，讓運動成為生活中的一部分。",
    image: "https://source.unsplash.com/random/?workout",
    imageText: "main image description",
    // linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: "滑雪好處竟然這麼多!?",
        // date: 'Nov 12',
        // description:
        //   'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: "https://source.unsplash.com/random/500x500/?skiing",
        imageLabel: "Image Text",
    },
    {
        title: "多樣食材運用好吃驚!",
        // date: 'Nov 11',
        // description:
        //   'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: "https://source.unsplash.com/random/500x500/?ingredients",
        imageLabel: "Image Text",
    },
    {
        title: "孕婦也能做的五種運動",
        // date: 'Nov 11',
        // description:
        //   'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: "https://source.unsplash.com/random/500x500/?pregnant",
        imageLabel: "Image Text",
    },
    {
        title: "五分鐘學會健康吃",
        // date: 'Nov 11',
        // description:
        //   'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: "https://source.unsplash.com/random/500x500/?Healthy+Meals",
        imageLabel: "Image Text",
    },
    {
        title: "從事運動沒想到這麼簡單！",
        // date: 'Nov 11',
        description:
            "避免於太飽或太餓時做運動。不應空腹做運動，特別緊記要吃早餐，以免體力不支。游泳前不要喝過多飲料，以免因嘔吐而導致哽塞。避免於太飽或太餓時做運動。不應空腹做運動，特別緊記要吃早餐，以免體力不支。游泳前不要喝過多飲料，以免因嘔吐而導致哽塞。",
        image: "https://source.unsplash.com/random/500x500/?sports",
        imageLabel: "Image Text",
    },
];
const fourPosts = featuredPosts.slice(0, 4);
const threePosts = featuredPosts.slice(0, 3);
const largePost = featuredPosts.slice(4, 5);

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
    return (
        <>
            <Header title="Blog" sections={sections} />
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={6}>
                {fourPosts.map((post) => (
                    <Grid item key={post.title}>
                        <FeaturedPost
                            cardStyle="normalCard"
                            actionAreaStyle="normalActionArea"
                            mediaStyle="normalMedia"
                            contentStyle="normalContent"
                            key={post.title}
                            post={post}
                        />
                    </Grid>
                ))}
                <Grid item xs={4} sx={{ p: 0, my: 3 }}>
                    <Grid container spacing={3}>
                        {largePost.map((post) => (
                            <Grid item key={post.title} sx={{ p: 0, mr: 3 }}>
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
                <Grid item xs={8} sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        {threePosts.map((post) => (
                            <Grid item key={post.title} sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
                                    post={post}
                                />
                            </Grid>
                        ))}
                        {threePosts.map((post) => (
                            <Grid item key={post.title} sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
                                    post={post}
                                />
                            </Grid>
                        ))}
                        {threePosts.map((post) => (
                            <Grid item key={post.title} sx={{ p: 0, mx: 3 }}>
                                <FeaturedPost
                                    cardStyle="smallCard"
                                    actionAreaStyle="smallActionArea"
                                    mediaStyle="smallMedia"
                                    contentStyle="smallContent"
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
                            {threePosts.map((post) => (
                                <Grid
                                    item
                                    key={post.title}
                                    sx={{ p: 0, mx: 1 }}
                                >
                                    <FeaturedPost
                                        cardStyle="smallCard"
                                        actionAreaStyle="smallActionArea"
                                        mediaStyle="smallMedia"
                                        contentStyle="smallContent"
                                        post={post}
                                    />
                                </Grid>
                            ))}
                            {threePosts.map((post) => (
                                <Grid
                                    item
                                    key={post.title}
                                    sx={{ p: 0, mx: 1 }}
                                >
                                    <FeaturedPost
                                        cardStyle="smallCard"
                                        actionAreaStyle="smallActionArea"
                                        mediaStyle="smallMedia"
                                        contentStyle="smallContent"
                                        post={post}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={3}>
                        {largePost.map((post) => (
                            <Grid item key={post.title} sx={{ p: 0, mr: 3 }}>
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
