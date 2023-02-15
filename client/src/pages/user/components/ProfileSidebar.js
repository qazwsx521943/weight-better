import React, { useState } from "react";
import ConfirmButton from "@/components/Buttons/ConfirmButton";
import { TextField } from "@mui/material";
import { RiUserFollowLine } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProfileSidebar = () => {
    // 設定自介編輯狀態
    const [intro, setIntro] = useState(true);
    // FIXME fetch DB
    const [text, setText] = useState("");

    const introChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="col-span-1 p-6">
            <div className="w-full h-full pt-10">
                {/*SECTION flex area start */}
                <div className="w-full h-full flex flex-col align-middle items-center">
                    <div className=" mb-2">
                        <img
                            src={require("../../../assets/WB3.png")}
                            className="w-72 h-72  bg-black rounded-full"
                        ></img>
                    </div>
                    <h2 className="text-black text-3xl mb-2">username</h2>
                    <div className="text-sm flex gap-1 items-center">
                        <RiUserFollowLine />
                        <span className="border-r-black inline-block pr-2 border-r-2">
                            following
                        </span>

                        <IoPersonAddSharp />
                        <span className="border-r-black inline-block">
                            followers
                        </span>
                    </div>
                    <div className="my-3 flex gap-1 items-center">
                        <FaMapMarkerAlt />
                        <p>Taipei</p>
                    </div>
                    <ConfirmButton onClick={() => setIntro(!intro)}>
                        {intro ? "編輯個人資料" : "儲存"}
                    </ConfirmButton>
                    <TextField
                        InputProps={{ readOnly: intro }}
                        label="自我介紹"
                        value={text}
                        onChange={introChange}
                    />
                </div>
                {/*SECTION flex area end */}
            </div>
        </div>
    );
};

export default ProfileSidebar;
