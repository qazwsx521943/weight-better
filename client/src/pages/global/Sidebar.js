// FIXME sidebar collapse and toggle status reference⬇︎
// https://github.com/azouaoui-med/react-pro-sidebar
// https://blog.logrocket.com/create-sidebar-react-pro-sidebar-mui/
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "@/Styles/styles";

// TODO member api
import logo from "../.././assets/WB3.png";

// ⬇︎ material ui
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            component={<Link to={to} />}
            active={selected === title}
            rootStyles={{ color: colors.black[400], fontWeight: 400 }}
            icon={icon}
            onClick={() => setSelected(title)}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

// export sidebar
const ReactSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // sidebar 展開
    const { collapseSidebar, rtl } = useProSidebar();
    const [expand, setExpand] = useState(false);

    // 所在頁面
    const [selected, setSelected] = useState("Home");

    return (
        <Box
            display="flex"
            flexDirection="row-reverse"
            height="100vh"
            minHeight="400px"
        >
            <Sidebar
                backgroundColor={colors.primary[200]}
                transitionDuration={1000}
                defaultCollapsed={!expand}
                breakPoint="md"
                // rtl="true"
            >
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled
                                        ? "#f5d9ff"
                                        : colors.black[400],
                                    "&:hover": {
                                        color: colors.primary[500],
                                    },
                                    backgroundColor: active
                                        ? colors.secondary[400]
                                        : "transparent !important",
                                };
                        },
                    }}
                >
                    <MenuItem
                        icon={
                            expand ? undefined : (
                                <IconButton
                                    onClick={() => {
                                        setExpand(!expand);
                                        collapseSidebar();
                                    }}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            )
                        }
                        rootStyles={{
                            margin: "10px 0 20px 0",
                            color: colors.black[400],
                        }}
                    >
                        {expand && (
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="center"
                                ml="15px"
                            >
                                {/* <Typography
                                    variant="h3"
                                    color={colors.black[500]}
                                >
                                    我的基本資料
                                </Typography> */}
                                <IconButton
                                    onClick={() => {
                                        setExpand(!expand);
                                        collapseSidebar();
                                    }}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* TODO member api */}
                    {/* 會員 */}
                    {expand && (
                        <Box>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="member-avatar"
                                    width="100px"
                                    height="100px"
                                    src={logo}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50px",
                                    }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.black[400]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    MONKEY
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.secondary[500]}
                                >
                                    Hey MONKEY
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* sidebar items */}
                    <Box paddingLeft={expand ? "10%" : undefined}>
                        <Item
                            title="過去訂單"
                            to="/member/orderList"
                            icon={<ListAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="購物車"
                            to="member/cart"
                            icon={<ShoppingCartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="最愛商品"
                            to="member/favorites"
                            icon={<FavoriteOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="我的折價券"
                            to="member/coupons"
                            icon={<SellOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="我的影片"
                            to="member/reels"
                            icon={<VideoLibraryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="我的文章"
                            to="member/articles"
                            icon={<LibraryBooksOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="我沒朋友"
                            to="member/friends"
                            icon={<PersonAddAlt1OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="基本資料"
                            to="/member"
                            icon={<AdminPanelSettingsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default ReactSidebar;
