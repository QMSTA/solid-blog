/** @type {import('tailwindcss').Config} */
module.exports = {

    darkMode: ["class"], content: ["./src/**/*.{html,js,jsx,ts,tsx}"], theme: {
        extend: {
            fontFamily: {
                code: ['FiraCode']
            }, colors: {
                tdc: 'var(--theme-default-color)', bdc: 'var(--backend-default-color)', bdcs: 'var(--backend-default-color-shadow)'
            }, keyframes: {
                check: {
                    '0%': {transform: 'scale(1)', opacity: '0.5'},
                    '100%': {transform: 'scale(1.6)', opacity: '0'},
                }
            }
        }
    }, plugins: [{
        'tailwindcss/nesting': require('postcss-nesting'),
    }],
};
