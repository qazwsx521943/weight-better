import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "@mui/material";

function FeaturedPost(props) {
    const { post, cardStyle, actionAreaStyle, mediaStyle, contentStyle } =
        props;

    const cardStyles = {
        normalCard: {
            display: "flex",
            flexDirection: "column",
            width: `320px`,
            height: `250px`,
        },
        largeCard: {
            display: "flex",
            flexDirection: "column",
            width: `450px`,
            height: `765px`,
        },
        smallCard: {
            display: "flex",
            flexDirection: "column",
            width: `240px`,
            height: `240px`,
        },
    };
    const actionAreaStyles = {
        normalActionArea: {
            width: `320px`,
            height: `250px`,
        },
        largeActionArea: {
            width: `450px`,
            height: `765px`,
        },
        smallActionArea: {
            width: `240px`,
            height: `240px`,
        },
    };
    const mediaStyles = {
        normalMedia: {
            width: `320px`,
            height: `190px`,
        },
        largeMedia: {
            width: `450px`,
            height: `450px`,
        },
        smallMedia: {
            width: `240px`,
            height: `180px`,
        },
    };
    const contentStyles = {
        normalContent: { flex: 1, width: `320px` },
        largeContent: { flex: 1, width: `450px` },
        smallContent: { flex: 1, width: `320px` },
    };
    return (
        <Grid item xs={12} sm={6} lg={3} sx={{ maxWidth: "320px" }}>
            <CardActionArea
                component="a"
                href={`/blog/BlogPost/${post.id}`}
                sx={{ ...actionAreaStyles[actionAreaStyle] }}
            >
                <Card sx={{ ...cardStyles[cardStyle] }}>
                    <CardMedia
                        component="img"
                        sx={{ ...mediaStyles[mediaStyle] ,objectFit: "cover" }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                    <Divider />
                    <CardContent sx={{ ...contentStyles[contentStyle] }}>
                        <Typography component="h2" variant="h4">
                            {post.title}
                        </Typography>
                        {/* <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography> */}
                        <Divider sx={{ borderColor: "transparent", my: 1 }} />
                        <Typography variant="subtitle2" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

// FeaturedPost.propTypes = {
//     post: PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         imageLabel: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default FeaturedPost;
