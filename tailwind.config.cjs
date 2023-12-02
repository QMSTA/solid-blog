/** @type {import('tailwindcss').Config} */
module.exports = {

    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                tdc: 'var(--theme-default-color)'
            }
        }
    },
    plugins: [{
        'tailwindcss/nesting': require('postcss-nesting'),
    }],
};
