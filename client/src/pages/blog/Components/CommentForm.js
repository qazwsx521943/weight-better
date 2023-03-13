import { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useAuth } from "@/hooks/AuthContext";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(3, 0),
    },
    input: {
        marginBottom: theme.spacing(2),
    },
}));

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
`;

function CommentForm({ onSubmit }) {
    const classes = useStyles();
    const [content, setContent] = useState("");
    const { currentUser } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name: currentUser.username, content });
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                label="Name"
                value={currentUser.username}
                disabled
                className={classes.input}
            />
            <TextField
                label="Comment"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                multiline
                rows={4}
                minRows={4}
                maxRows={10}
                variant="outlined"
                className={classes.input}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default CommentForm;
