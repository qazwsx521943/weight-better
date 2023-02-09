import { Box, TextField, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import { tokens } from "@/Styles/styles";

const styles = {
    flexCol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
};

function Profile() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // profile data collection
    const [formData, setFormData] = useState({
        nickname: "",
        gender: "",
        weight: "",
        height: "",
        interest: "",
        education: "",
        occupation: "",
        introduction: "",
    });

    // change formData
    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // save profile changes
    // FIXME
    const submitProfile = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(
                "http://localhost:8080/user/profile_submit",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            console.log("Success: ", data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <Box m="20px">
            <Header title="基本資料" subtitle="" />
            <Box display="flex" justifyContent="center" alignItems="center">
                <form onSubmit={submitProfile}>
                    <Box sx={styles.flexCol} gap="20px">
                        <TextField
                            type="text"
                            name="nickname"
                            label="暱稱"
                            value={formData.nickname}
                            onChange={inputChange}
                        />
                        <TextField
                            type="text"
                            name="gender"
                            label="性別"
                            value={formData.gender}
                            onChange={inputChange}
                        />
                        <TextField
                            type="number"
                            name="weight"
                            label="體重"
                            value={formData.weight}
                            onChange={inputChange}
                        />
                        <TextField
                            type="number"
                            name="height"
                            label="身高"
                            value={formData.height}
                            onChange={inputChange}
                        />
                        <TextField
                            type="text"
                            name="interest"
                            label="興趣"
                            value={formData.interest}
                            onChange={inputChange}
                        />
                        <TextField
                            type="text"
                            name="education"
                            label="畢業學校"
                            value={formData.education}
                            onChange={inputChange}
                        />
                        <TextField
                            type="text"
                            name="occupation"
                            label="職業"
                            value={formData.occupation}
                            onChange={inputChange}
                        />
                        <TextField
                            type="text"
                            name="introduction"
                            label="自我發揮"
                            value={formData.introduction}
                            onChange={inputChange}
                        />
                        <Button type="submit" variant="contained" color="teal">
                            儲存
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default Profile;
