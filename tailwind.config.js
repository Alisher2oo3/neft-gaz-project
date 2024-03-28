/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            minWidth: {
                screen: '100vh',
            },
            maxWidth: {
                '95percent': '95%',
            },
        },
    },
    plugins: [],
}