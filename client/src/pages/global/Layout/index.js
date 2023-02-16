import Topbar from "../Topbar";
import SidebarV2 from "../SidebarV2";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
    return (
        <Box width="100%" height="100%">
            {/* <SidebarV2 /> */}
            <Box flexGrow={1}>
                <Topbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
