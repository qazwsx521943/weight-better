import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        // palette values for dark mode
        primary: {
            main: "#6677C8",
        },
        teal: {
            main: "#1BB6B2",
        },
        pink: {
            main: "#FFA5AE",
        },
        yellow: {
            main: "#FFE4A3",
        },
        black: {
            main: "#2F2D3F",
        },
        background: {
            dark: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
        fontSize: 16,
        h1: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 14,
        },
    },
});

export default theme;
