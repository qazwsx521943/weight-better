import { Box, TextField, Button, Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FlexBox from "@/components/FlexBox/FlexBox";
import EmailIcon from "@mui/icons-material/Email";
import UserService from "@/pages/services/user.service";
import { TealButton } from "../components/TealButton";
import SaveIcon from "@mui/icons-material/Save";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BoyIcon from "@mui/icons-material/Boy";
import InterestsIcon from "@mui/icons-material/Interests";
import PaletteIcon from "@mui/icons-material/Palette";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const data = [
    { name: "email", label: "Email", icon: <EmailIcon /> },
    { name: "fullname", label: "姓名", icon: <BoyIcon /> },
    { name: "interest", label: "興趣", icon: <InterestsIcon /> },
    { name: "introduction", label: "自我介紹", icon: <PaletteIcon />, type: "textarea" },
    { name: "state", label: "會員等級", icon: <MilitaryTechIcon />, disabled: true },
];

function Profile({ currentUser, setCurrentUser }) {
    const [profileData, setProfileData] = useState({});
    const [editStatus, seteditStatus] = useState(false);
    // profile data collection
    useEffect(() => {
        UserService.userProfile(currentUser.username).then((res) => {
            setProfileData(res.data[0]);
        });
    }, []);

    // const [formData, setFormData] = useState({
    //     nickname: "",
    //     gender: "",
    //     weight: "",
    //     height: "",
    //     interest: "",
    //     education: "",
    //     occupation: "",
    //     introduction: "",
    // });

    // change ProfileData
    const inputChange = (e) => {
        console.log(e.target.value);
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };
    console.log(profileData);

    // save profile changes
    // FIXME
    // const submitProfile = async (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     try {
    //         const response = await fetch("http://localhost:8080/user/profile_submit", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formData),
    //         });
    //         const data = await response.json();
    //         console.log("Success: ", data);
    //     } catch (error) {
    //         console.error("Error: ", error);
    //     }
    // };

    return (
        <Box display={"flex"} flexDirection="column" justifyContent="center">
            <Box
                sx={{ "& > :not(style)": { m: 1 }, alignItems: { sm: "start" } }}
                display="flex"
                flexDirection={"column"}
                alignItems={"center"}
                marginX={3}>
                {data.map((field, i) => (
                    <FormControl variant="standard" key={i}>
                        <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                        <Input
                            type={field.type || "text"}
                            disabled={field.disabled || !editStatus}
                            id={field.name}
                            name={field.name}
                            onChange={inputChange}
                            value={profileData[field.name] || ""}
                            startAdornment={<InputAdornment position="start">{field.icon}</InputAdornment>}></Input>
                    </FormControl>
                ))}
                {/* <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        disabled={!editStatus}
                        id="email"
                        name="email"
                        onChange={inputChange}
                        value={profileData.email || ""}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }></Input>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="fullname">姓名</InputLabel>
                    <Input
                        disabled={!editStatus}
                        id="fullname"
                        name="fullname"
                        onChange={inputChange}
                        value={profileData.fullname || ""}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }></Input>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="username">帳號</InputLabel>
                    <Input
                        disabled={!editStatus}
                        id="username"
                        name="username"
                        onChange={inputChange}
                        value={profileData.username || ""}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }></Input>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        disabled={!editStatus}
                        id="email"
                        name="email"
                        onChange={inputChange}
                        value={profileData.email || ""}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }></Input>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        disabled={!editStatus}
                        id="email"
                        name="email"
                        onChange={inputChange}
                        value={profileData.email || ""}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }></Input>
                </FormControl> */}
            </Box>
            <TealButton
                sx={{ marginX: { xs: 2, sm: "auto" } }}
                onClick={() => seteditStatus(!editStatus)}
                endIcon={editStatus ? <SaveIcon /> : <ModeEditIcon />}>
                {editStatus ? "儲存" : "編輯"}
            </TealButton>
        </Box>
    );
}

export default Profile;
