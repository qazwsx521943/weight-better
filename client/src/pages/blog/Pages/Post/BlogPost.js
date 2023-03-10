import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Grid,
    Paper,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Header from "../../Components/Header";
import CommentForm from "../../Components/CommentForm";

const MainVisual = styled("img")(({ loaded }) => ({
    maxHeight: "500px",
    display: "block",
    margin: "0 auto",
    opacity: loaded ? 1 : 0.5,
    transition: "opacity 0.5s ease-in-out",
}));

const BlogContent = styled("div")({
    fontSize: "16px",
    lineHeight: "1.5",
    height: "100vh",
    overflowY: "scroll",
    margin: "30px",
    // backgroundColor: "lightgray",
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

function BlogPost() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/blogs/post/${id}`)
            .then((response) => {
                const post = response.data;
                const author = {
                    fullname: post.author_fullname || "Unknown",
                    profileImage:
                        post.profile_image || "https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png",
                    email: post.email || "Unknown",
                };
                setBlog({ ...post, author });
            })
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/blogs/`)
            .then((response) => {
                const randomPosts = response.data
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3);
                setRelatedPosts(randomPosts);
            })
            .catch((error) => console.error(error));
    }, []);

    if (!blog) {
        return (
            <div>
                <Typography variant="h3">Loading...</Typography>
            </div>
        );
    }

    const { title, description, content, image, imageLabel } = blog;

    return (
        <>
            <Header title="Blog" />
            <MainVisual
                src={image}
                loaded={imageLoaded}
                onLoad={() => setImageLoaded(true)}
                style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    marginBottom: "30px",
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h4" align="center" gutterBottom>
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            {description}
                        </Typography>
                        <Divider />
                        <BlogContent
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </Paper>

                    <CommentForm />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper>
                        <img
                            src={blog.author.profileImage}
                            alt={blog.author.fullname}
                            style={{
                                width: "80%",
                                display: "block",
                                margin: "auto",
                            }}
                        />
                        <Typography variant="h5" align="center" gutterBottom>
                            ??????
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            ?????????{blog.author.fullname}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            ?????????{blog.author.email}
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="h4" align="center" gutterBottom>
                            ????????????
                        </Typography>
                        <List>
                            {relatedPosts.map((post) => (
                                <StyledListItem
                                    component="a"
                                    href={`/blog/BlogPost/${post.id}`}
                                >
                                    <img
                                        src={post.image}
                                        alt={post.imageLabel}
                                        style={{
                                            marginRight: "16px",
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <ListItemText primary={post.title} />
                                </StyledListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default BlogPost;
