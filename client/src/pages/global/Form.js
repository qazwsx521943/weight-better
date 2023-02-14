import React from "react";
import FlexColBox from "@/components/FlexBox/FlexColBox";
import { useTheme } from "@mui/material";
import { tokens } from "@/Styles/styles";

const Form = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <form>
            <FlexColBox
                maxWidth={400}
                // bgcolor="Background"
                borderRadius={2}
                sx={{ padding: "2rem 3rem" }}
                boxShadow={`5px 5px 10px ${colors.black[400]}`}
            >
                {props.children}
            </FlexColBox>
        </form>
    );
};

export default Form;
