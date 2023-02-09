import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "@/Styles/styles";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.teal[400]}
                fontWeight="bold"
                sx={{ mb: 5 }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.teal[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
