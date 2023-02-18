/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            primary: "#6677C8",
            yellow: "#FFE4A3",
            pink: "#FFA5AE",
            teal: "#1BB6B2",
            "teal-light": "#1BB6B280",
            black: "#2F2D3F",
            white: "#FFFFFF",
            gray: "#A9A9A9",
        },
        boxShadow: {
            sm: "0px 2px 4px 0px rgba(11,10,55,0.15)",
            lg: "0px 8px 20px 0px rgba(18,16,99,0.06)",
        },
        extend: {},
    },

    plugins: [],
};
