import { useState, useEffect } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import jwtDecode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(3, 0),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    alignSelf: "flex-end",
  },
}));

function CommentForm({ onSubmit }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name: username, content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="Name"
        value={username}
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
}

export default CommentForm;
