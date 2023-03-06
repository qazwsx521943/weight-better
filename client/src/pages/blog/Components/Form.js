import React, { useRef, useState, useEffect } from "react";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    makeStyles,
    createTheme,
    ThemeProvider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import Editor from "./Editor";
import Typography from "@mui/material/Typography";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#f44336",
        },
    },
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    editor: {
        minHeight: "600px",
    },
    submitButton: {
        width: "100px",
        height: "30px",
        padding: "5px",
        fontSize: "14px",
    },
    form: {
        padding: theme.spacing(2),
    },
    body: {
        padding: theme.spacing(3),
    },
}));

function Form() {
    const navigate = useNavigate();
    const classes = useStyles();

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
        <ThemeProvider theme={theme}>
            <body className={classes.body}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={handleTitleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                    />
                    {/* <FormControl
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="image-select-label">Image</InputLabel>
                        <Select
                            labelId="image-select-label"
                            id="image-select"
                            value={image}
                            onChange={handleImageChange}
                            label="Image"
                            color="primary"
                        >
                            <MenuItem value="image1">Image 1</MenuItem>
                            <MenuItem value="image2">Image 2</MenuItem>
                            <MenuItem value="image3">Image 3</MenuItem>
                        </Select>
                    </FormControl> */}
                    <TextField
                        label="Image Label"
                        value={imageLabel}
                        onChange={handleImageLabelChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                    />
                    <Editor
                        className={classes.editor}
                        onChange={handleEditorChange}
                        config={{
                            extraPlugins: "image2",
                            ckfinder: {
                                uploadUrl: "/api/uploadImage",
                            },
                            image: {
                                // 设置默认的图片大小
                                styles: {
                                    "max-width": "100%",
                                    "max-height": "500px",
                                },
                                // 配置图片预览
                                previewImage: true,
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submitButton}
                    >
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
                            <Typography variant="h3">
                                {successMessage}
                            </Typography>
                        </MuiAlert>
                    </Snackbar>
                </form>
            </body>
        </ThemeProvider>
    );
}

export default Form;
