import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AuthService from "../../services/auth.service";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaymentIcon from "@mui/icons-material/Payment";

// component
import AvatarProfile from "../components/avatar/AvatarProfile";

export default function SettingList({ user }) {
    const [open, setOpen] = useState(true);
    // console.log(user);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, minWidth: 200, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <AvatarProfile user={user} />
                </ListSubheader>
            }>
            <br />
            <ListItemButton>
                <ListItemIcon>
                    <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="帳號" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="付款資訊" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="訂閱資訊" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
