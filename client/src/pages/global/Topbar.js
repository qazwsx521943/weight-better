import React, { useContext, useState } from "react";
import { Box, IconButton, Typography, Button, Avatar, Menu, MenuItem, styled, Toolbar, AppBar, Badge } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AuthService from "../services/auth.service";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../../hooks/AuthContext";

import logo from "@/assets/WB3.png";
import UserService from "../services/user.service";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
}));

const Logo = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const Nav = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const Search = styled("div")(({ theme }) => ({
    display: "none",
    backgroundColor: theme.palette.neutral.light,
    padding: "0px 5px",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "5px",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}));

const pages = {
    短影音: "/video",
    部落格: "/blog",
    菜單: "/menu",
    商城: "/shop",
};

const Topbar = () => {
    const auth = useAuth();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleLogout = () => {
        // 清空local storage
        AuthService.logout();
        window.alert("登出成功！回到登入頁");
        navigate("/");
        auth.userLogout();
        // setCurrentUser(null);
    };
    const inputChange = (e, newValue) => {
        console.log(search);
        setSearch(newValue);
    };

    const searchUser = (e) => {
        if (e.key === "Enter") {
            navigate(`/${search}`);
        }
    };

    return (
<<<<<<< HEAD
        // 在註冊與登入頁面不顯示 Navbar
        // <div className={`${location.pathname === "/login" || `${location.pathname}` === "/register" ? "hidden" : ""}`}>
        <AppBar position="sticky">
            <StyledToolbar p={1.5} bgcolor="primary.main">
                <Logo sx={{ mr: 2 }}>
                    <Typography alignSelf={"center"}>
                        <img src={logo} alt="logo" className="h-8" />
                    </Typography>
                </Logo>
                <Nav sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
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
                            }}>
                            {page}
                        </Button>
                    ))}
                </Nav>
                <Search>
                    <InputBase size="small" placeholder="Search..." onChange={inputChange} onKeyDown={searchUser} />
                </Search>
                <Icons>
                    <IconButton type="button">
                        <SearchOutlinedIcon />
=======
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
                {Object.keys(pages).map((page) => (
                    <Button
                        key={page}
                        sx={{
                            mx: 1,
                            color: "yellow.main",
                            display: "block",
                        }}
                        onClick={() => navigate(pages[page])}
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
>>>>>>> blog
                    </IconButton>
                    {auth.currentUser && (
                        <IconButton>
                            <Badge badgeContent={4} color="pink">
                                <NotificationsOutlinedIcon />
                            </Badge>
                        </IconButton>
                    )}
                    {auth.currentUser && (
                        <IconButton>
                            <Badge badgeContent={4} color="pink">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    )}
                    {auth.currentUser ? (
                        <IconButton onClick={handleLogout}>
                            <LogoutOutlinedIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => navigate("/login")}>
                            <PowerSettingsNewOutlinedIcon />
                        </IconButton>
                    )}
                    {auth.currentUser && (
                        <IconButton onClick={() => setOpen(true)}>
                            <Avatar alt="profile_image" sx={{ width: "30px", height: "30px" }} src="/static/images/avatar/3.jpg" />
                        </IconButton>
                    )}
                </Icons>
                <UserBox>
                    {/* <Typography>{currentUser.username}</Typography> */}
                    {/* <IconButton onClick={() => navigate(`/user/${currentUser.username}`)}> */}
                    <IconButton onClick={() => setOpen(true)}>
                        <Avatar alt="profile_image" sx={{ width: "30px", height: "30px" }} src="/static/images/avatar/3.jpg" />
                    </IconButton>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}>
                <MenuItem
                    onClick={(e) => {
                        setOpen(false);
                        navigate(`/${auth.currentUser.username}`);
                    }}>
                    Profile
                </MenuItem>
                <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
                <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
            </Menu>
        </AppBar>
        // </div>
    );
};

export default Topbar;
