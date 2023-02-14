import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color="teal.main"
                fontWeight="bold"
                sx={{ mb: 5 }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color="teal.main">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
