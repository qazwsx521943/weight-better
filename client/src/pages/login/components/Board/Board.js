import React from "react";
import { useNavigate } from "react-router-dom";

const Board = (props) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col p-10 gap-20">
            <div className="flex flex-row self-center lg:self-start">
                <img
                    src={require("../../../../assets/WB3.png")}
                    width="200px"
                    className="hover:cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className={"flex flex-grow flex-row justify-center"}>{props.children}</div>
            <div className="flex-row justify-between">
                <img src={require("../../../../assets/WB3.png")} width="200px" />
            </div>
        </div>
    );
};

export default Board;
