/** @type {import('tailwindcss').Config} */
module.exports = {

    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                code: ['FiraCode']
            },
            colors: {
                tdc: 'var(--theme-default-color)',
                bdc: 'var(--backend-default-color)',
                bdcs: 'var(--backend-default-color-shadow)'
            }
        }
    },
    plugins: [{
        'tailwindcss/nesting': require('postcss-nesting'),
    }],
};
