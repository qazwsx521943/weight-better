import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaymentIcon from "@mui/icons-material/Payment";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";

// component
import AvatarProfile from "../components/avatar/AvatarProfile";

const settings = [
    { title: "帳號", icon: <AdminPanelSettingsIcon />, link: "" },
    { title: "付款資訊", icon: <PaymentIcon /> },
    { title: "密碼安全", icon: <VpnKeyIcon />, link: "updatepassword" },
    { title: "訂閱資訊", icon: <SubscriptionsIcon />, link: "billing" },
    { title: "我的地址", icon: <BusinessIcon />, link: "address" },
];

export default function SettingList({ user }) {
    // console.log(user);
    const navigate = useNavigate();
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <AvatarProfile user={user} />
                </ListSubheader>
            }>
            <br />
            {settings.map((item, i) => (
                <ListItemButton key={i} onClick={() => navigate(item.link)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 16 }} primary={item.title} />
                </ListItemButton>
            ))}
        </List>
    );
}
