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
import { Grid } from "@material-ui/core";

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
    const [category, setCategory] = useState("");

    const htmlContent = content;

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

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

    // function handleImageChange(event) {
    //     setImage(event.target.value);
    // }

    function handleImageLabelChange(event) {
        setImageLabel(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        //向後端發送post請求
        axios
            .post("http://localhost:8080/blogs", {
                //提交表單中的各項
                title,
                description,
                content: htmlContent,
                image,
                imageLabel,
                category,
            })
            .then((response) => {
                //設定成功發布訊息
                setSuccessMessage("文章發布成功！");
                //設置新post id
                setTimeout(() => {
                    setNewPost(response.data.id);
                }, 1000);
            });
    }

    useEffect(() => {
        if (newPost) {
            navigate(`/blog/BlogPost/${newPost}`);
        }
    }, [newPost]);

    return (
        <ThemeProvider theme={theme}>
            <body className={classes.body}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={0} alignItems="flex-end" sx={{m:0 ,p:0}}>
                        <Grid item xs={3}>
                            <FormControl
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <InputLabel id="category-select-label">
                                    Category
                                </InputLabel>
                                <Select
                                    labelId="category-select-label"
                                    id="category-select"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    label="Category"
                                    color="primary"
                                >
                                    <MenuItem value="健身運動">
                                        健身運動
                                    </MenuItem>
                                    <MenuItem value="養生保健">
                                        養生保健
                                    </MenuItem>
                                    {/* Add more categories here */}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={handleTitleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                color="primary"
                            />
                        </Grid>
                    </Grid>
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
                    {/* <TextField
                        label="Image Label"
                        value={imageLabel}
                        onChange={handleImageLabelChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                    /> */}
                    <Editor
                        className={classes.editor}
                        onChange={handleEditorChange}
                        // style={{ minHeight: "600px" }}
                        config={{
                            extraPlugins: "image2",
                            ckfinder: {
                                uploadUrl: "/api/uploadImage",
                            },
                            image: {
                                // 設置圖片大小
                                styles: {
                                    "max-width": "100%",
                                    "max-height": "500px",
                                },
                                // 圖片預覽
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
                        //控制snackbar是否顯示
                        open={Boolean(successMessage)}
                        //自動消失時間
                        autoHideDuration={1500}
                        //關閉時的
                        onClose={() => setSuccessMessage("")}
                        //設置位置
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <MuiAlert
                            //訊息類型
                            severity="success"
                            //關閉的
                            onClose={() => setSuccessMessage("")}
                            //設定訊息樣式
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
