import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// 顏色by tailwind shades
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              primary: {
                  100: "#e0e4f4",
                  200: "#c2c9e9",
                  300: "#a3adde",
                  400: "#8592d3",
                  500: "#6677c8",
                  600: "#525fa0",
                  700: "#3d4778",
                  800: "#293050",
                  900: "#141828",
              },
              secondary: {
                  100: "#fffaed",
                  200: "#fff4da",
                  300: "#ffefc8",
                  400: "#ffe9b5",
                  500: "#ffe4a3",
                  600: "#ccb682",
                  700: "#998962",
                  800: "#665b41",
                  900: "#332e21",
              },
              black: {
                  100: "#d5d5d9",
                  200: "#acabb2",
                  300: "#82818c",
                  400: "#595765",
                  500: "#2f2d3f",
                  600: "#262432",
                  700: "#1c1b26",
                  800: "#131219",
                  900: "#09090d",
              },
              teal: {
                  100: "#d1f0f0",
                  200: "#a4e2e0",
                  300: "#76d3d1",
                  400: "#49c5c1",
                  500: "#1bb6b2",
                  600: "#16928e",
                  700: "#106d6b",
                  800: "#0b4947",
                  900: "#052424",
              },
              pink: {
                  100: "#ffedef",
                  200: "#ffdbdf",
                  300: "#ffc9ce",
                  400: "#ffb7be",
                  500: "#ffa5ae",
                  600: "#cc848b",
                  700: "#996368",
                  800: "#664246",
                  900: "#332123",
              },
          }
        : {
              primary: {
                  900: "#141828",
                  800: "#293050",
                  700: "#3d4778",
                  600: "#525fa0",
                  500: "#6677c8",
                  400: "#8592d3",
                  300: "#a3adde",
                  200: "#c2c9e9",
                  100: "#e0e4f4",
              },
              secondary: {
                  900: "#332e21",
                  800: "#665b41",
                  700: "#998962",
                  600: "#ccb682",
                  500: "#ffe4a3",
                  400: "#ffe9b5",
                  300: "#ffefc8",
                  200: "#fff4da",
                  100: "#fffaed",
              },
              black: {
                  900: "#09090d",
                  800: "#131219",
                  700: "#1c1b26",
                  600: "#262432",
                  500: "#2f2d3f",
                  400: "#595765",
                  300: "#82818c",
                  200: "#acabb2",
                  100: "#d5d5d9",
              },
              teal: {
                  900: "#052424",
                  800: "#0b4947",
                  700: "#106d6b",
                  600: "#16928e",
                  500: "#1bb6b2",
                  400: "#49c5c1",
                  300: "#76d3d1",
                  200: "#a4e2e0",
                  100: "#d1f0f0",
              },
              pink: {
                  900: "#332123",
                  800: "#664246",
                  700: "#996368",
                  600: "#cc848b",
                  500: "#ffa5ae",
                  400: "#ffb7be",
                  300: "#ffc9ce",
                  200: "#ffdbdf",
                  100: "#ffedef",
              },
          }),
});

// mui 覆蓋預設
export const themeSet = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                          main: colors.secondary[500],
                      },
                      teal: {
                          main: colors.teal[500],
                      },
                      pink: {
                          main: colors.pink[500],
                      },
                      neutral: {
                          dark: colors.black[700],
                          main: colors.black[500],
                          light: colors.black[100],
                      },
                      background: {
                          dark: "#FFFFFF",
                      },
                  }
                : {
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                          main: colors.secondary[500],
                      },
                      teal: {
                          main: colors.teal[500],
                      },
                      pink: {
                          main: colors.pink[500],
                      },
                      neutral: {
                          dark: colors.black[700],
                          main: colors.black[500],
                          light: colors.black[100],
                      },
                      background: {
                          dark: "#FFFFFF",
                      },
                  }),
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
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSet(mode)), [mode]);

    return [theme, colorMode];
};
