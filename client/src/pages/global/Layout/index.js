import Topbar from "../Topbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = ({ currentUser, setCurrentUser }) => {
    return (
        <Box width="100%" height="100%">
            <Box flexGrow={1} height="100%">
                <Topbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
