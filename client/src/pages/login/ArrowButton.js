import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowButton = (props) => {
    return (
        <Button
            variant="contained"
            color={props.color || "teal"}
            sx={{
                mx: 1, // ✔️ this shortcut is specific to the `sx` prop,
                my: 5,
                width: 75,
                height: 75,
                borderRadius: 8,
            }}
            onClick={props.onClick}
        >
            <ArrowForwardIcon />
        </Button>
    );
};

export default ArrowButton;
