import React from "react";
import FlexColBox from "@/components/FlexBox/FlexColBox";

const Form = (props) => {
    return (
        <form className="w-fit">
            <FlexColBox
                bgcolor="Background"
                borderRadius={2}
                borderColor="black"
                border="solid"
                sx={{ padding: "2rem 3rem", width: { md: 400, lg: 450, sm: 350 }, height: { sm: 400, md: 450 } }}
                boxShadow={`5px 5px 10px primary.main`}>
                {props.children}
            </FlexColBox>
        </form>
    );
};

export default Form;
