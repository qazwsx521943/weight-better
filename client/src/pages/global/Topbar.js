import React, { useContext, useState } from "react";
import {
    Box,
    IconButton,
    Typography,
    Button,
    Avatar,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    AppBar,
    Badge,
    MenuList,
    ListItemText,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AuthService from "../services/auth.service";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../../hooks/AuthContext";

import logo from "@/assets/WB3.png";
import axios from "axios";

// import {useSelector} from "react-redux"

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
    position: "relative",
    backgroundColor: theme.palette.neutral.light,
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
    const [search, setSearch] = useState([]);
    const navigate = useNavigate();
    const handleLogout = () => {
        setOpen(false);
        // 清空local storage
        AuthService.logout();
        window.alert("登出成功！回到登入頁");
        navigate("/");
        auth.userLogout();
    };
    const inputChange = (e, newValue) => {
        setSearch((p) => []);
        axios.get(`${process.env.REACT_APP_API_KEY}/user/search/${e.target.value}`).then((res) => {
            setSearch(res.data);
            // console.log(res.data);
        });

        // setSearch(newValue);
    };

    // const cart = useSelector(state=>state.cart)
    // console.log(cart)

    return (
        // 在註冊與登入頁面不顯示 Navbar
        // <div className={`${location.pathname === "/login" || `${location.pathname}` === "/register" ? "hidden" : ""}`}>
        <AppBar position="sticky">
            <StyledToolbar p={1.5} bgcolor="primary.main">
                <Logo sx={{ mr: 2 }}>
                    <Typography alignSelf={"center"} sx={{ "&:hover": { cursor: "pointer" } }}>
                        <img src={logo} alt="logo" className="h-8" onClick={() => navigate("/")} />
                    </Typography>
                </Logo>
                <Nav sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                    {Object.keys(pages).map((page) => (
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
                                } else if (page === "短影音") {
                                    navigate("/reels/home");
                                } else if (page === "部落格") {
                                    navigate("/blog");
                                }
                            }}>
                            {page}
                        </Button>
                    ))}
                </Nav>
                <Search>
                    <InputBase size="small" placeholder="搜尋用戶..." onChange={inputChange} sx={{ marginX: "10px" }} />
                    {search.length > 0 && (
                        <MenuList
                            sx={{
                                position: "absolute",
                                top: "100%",
                                zIndex: "10",
                                width: "100%",
                                backgroundColor: `${search.length < 0 ? "transparent" : "neutral.light"}`,
                            }}>
                            {search.map((value, i) => (
                                <MenuItem
                                    key={i}
                                    onClick={() => {
                                        navigate(`${value.username}`);
                                        setSearch([]);
                                    }}>
                                    <ListItemText sx={{ fontSize: "5px" }}>{value.username}</ListItemText>
                                </MenuItem>
                            ))}
                        </MenuList>
                    )}
                </Search>
                <Icons>
                    <IconButton type="button">
                        <SearchOutlinedIcon />
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
                            <Link to={`/Shop/Cart`}><Badge badgeContent={4} color="pink">
                                <ShoppingCartIcon />
                            </Badge></Link>
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
                            <Avatar
                                alt="profile_image"
                                sx={{ width: "30px", height: "30px" }}
                                src={auth.currentUser?.profile_image || "/imagesStory/users/joe.jpg"}
                            />
                        </IconButton>
                    )}
                </Icons>
                <UserBox>
                    {/* <Typography>{currentUser.username}</Typography> */}
                    {/* <IconButton onClick={() => navigate(`/user/${currentUser.username}`)}> */}
                    <IconButton onClick={() => setOpen(true)}>
                        <Avatar
                            alt="profile_image"
                            sx={{ width: "30px", height: "30px" }}
                            src={auth.currentUser?.profile_image || "/imagesStory/users/joe.jpg"}
                        />
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
                    個人檔案
                </MenuItem>
                <MenuItem
                    onClick={(e) => {
                        setOpen(false);
                        navigate(`/settings`);
                    }}>
                    帳號資訊
                </MenuItem>
                <MenuItem onClick={handleLogout}>登出</MenuItem>
            </Menu>
        </AppBar>
        // </div>
    );
};

export default Topbar;
