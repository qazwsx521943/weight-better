import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        // palette values for dark mode
        primary: {
            main: "#6677C8",
            light: "#6677C880",
            contrastText: "#2F2D3F",
        },
        teal: {
            main: "#1BB6B2",
            light: "#1BB6B280",
            contrastText: "#2F2D3F",
        },
        pink: {
            main: "#FFA5AE",
            light: "#FFA5AE80",
            contrastText: "#2F2D3F",
        },
        yellow: {
            main: "#FFE4A3",
            light: "#FFE4A380",
            contrastText: "#2F2D3F",
        },
        black: {
            main: "#2F2D3F",
        },
        neutral: {
            dark: "#626161",
            main: "#A9A9A9",
            light: "#E1E1E1",
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
        h7: {
            fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
            fontSize: 12,
        },
    },
});

export default theme;
