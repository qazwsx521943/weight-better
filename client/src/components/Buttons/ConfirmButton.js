import { Button } from "@mui/material";

const ConfirmButton = (props) => {
    return (
        <Button
            size="large"
            variant="contained"
            color="teal"
            sx={{
                mx: 1, // ✔️ this shortcut is specific to the `sx` prop,
                my: 3,
            }}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
};

export default ConfirmButton;
