import React, { useRef, useState, useEffect } from "react";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import Editor from "./Editor";
import Typography from "@mui/material/Typography";

function Form() {
    const navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imageLabel, setImageLabel] = useState("");
    const [newPost, setNewPost] = useState(null);

    const snackbarRef = useRef(null);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleEditorChange(event, editor) {
        const data = editor.getData();
        setContent(data);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleImageLabelChange(event) {
        setImageLabel(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post("http://localhost:8080/blogs", {
                title,
                description,
                content,
                image,
                imageLabel,
            })
            .then((response) => {
                // setSuccessMessage("文章發布成功！");
                // snackbarRef.current.click();
                setNewPost(response.data.id);
            });
    }

    useEffect(() => {
        if (newPost) {
            navigate(`/BlogPost/${newPost}`);
        }
    }, [newPost]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={title}
                onChange={handleTitleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={handleDescriptionChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Image</InputLabel>
                <Select value={image} onChange={handleImageChange}>
                    <MenuItem value="image1">Image 1</MenuItem>
                    <MenuItem value="image2">Image 2</MenuItem>
                    <MenuItem value="image3">Image 3</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Image Label"
                value={imageLabel}
                onChange={handleImageLabelChange}
                fullWidth
                margin="normal"
            />
            <Editor onChange={handleEditorChange} />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            <Snackbar
                open={Boolean(successMessage)}
                autoHideDuration={1500}
                onClose={() => setSuccessMessage("")}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                ref={snackbarRef}
            >
                <MuiAlert
                    severity="success"
                    onClose={() => setSuccessMessage("")}
                    style={{ fontSize: "18px" }}
                >
                    <Typography variant="h3">{successMessage}</Typography>
                </MuiAlert>
            </Snackbar>
        </form>
    );
}

export default Form;
