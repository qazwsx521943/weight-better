import React from "react";
import FlexColBox from "@/components/FlexBox/FlexColBox";

const Form = (props) => {
    return (
        <form>
            <FlexColBox
                maxWidth={400}
                // bgcolor="Background"
                borderRadius={2}
                sx={{ padding: "2rem 3rem" }}
                boxShadow={`5px 5px 10px primary.main`}
            >
                {props.children}
            </FlexColBox>
        </form>
    );
};

export default Form;
