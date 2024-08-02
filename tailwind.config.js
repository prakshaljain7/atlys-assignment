/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-gray": "#6B6C70",
                "light-gray": "#C5C7CA",
            },
            fontWeight: {
                "semi-bold": 500,
                bold: 700,
            },
        },
    },
    plugins: [],
};
