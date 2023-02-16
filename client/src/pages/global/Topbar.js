import React, { useContext } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import logo from "@/assets/WB3.png";
import { AuthContext } from "./store/AuthContext";

const pages = ["短影音", "部落格", "菜單", "商城"];

const Topbar = () => {
    const navigate = useNavigate();
    const { login, setLogin } = useContext(AuthContext);

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
                            } else if (page === "菜單") {
                                navigate("/menu");
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

                {login.status ? (
                    <IconButton onClick={() => navigate("/user")}>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                ) : (
                    <Link to="/login">
                        <span className="inline-block bg-pink ">登入</span>
                    </Link>
                )}
            </Box>
        </Box>
    );
};

export default Topbar;
