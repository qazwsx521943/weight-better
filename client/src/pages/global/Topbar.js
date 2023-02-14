import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import logo from "@/assets/WB3.png";

const pages = ["短影音", "部落格", "菜單", "抽卡", "商城"];

const Topbar = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p={2}
            backgroundColor="primary.main"
        >
            <Box
                display="flex"
                backgroundColor={"primary.main"}
                borderRadius="3px"
                sx={{ mr: 2 }}
            >
                <Typography alignSelf={"center"}>
                    <img src={logo} alt="logo" className="h-6" />
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{
                            mx: 1,
                            color: "yellow.main",
                            display: "block",
                        }}
                        onClick={() => {
                            if (page === "商城") {
                                navigate("/shop");
                            }
                        }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            {/* TODO ICONS */}
            <Box display="flex">
                {/* TODO Search bar api */}
                <InputBase sx={{ mr: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>

                {/* <IconButton>
                    <SettingsIcon />
                </IconButton> */}
                <IconButton>
                    <PersonOutlineOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
