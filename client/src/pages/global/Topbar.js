import { useContext } from "react";
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { ColorModeContext, tokens } from "@/Styles/styles";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import logo from "@/assets/WB3.png";

const pages = ["短影音", "部落格", "菜單", "抽卡", "商城"];

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p={2}
            backgroundColor={colors.primary[400]}
        >
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                sx={{ mr: 2 }}
            >
                <Typography>
                    <img src={logo} alt="logo" height="34px" />
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{
                            mx: 1,
                            color: colors.secondary[400],
                            display: "block",
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
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
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
