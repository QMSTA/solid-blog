/** @type {import('tailwindcss').Config} */
module.exports = {

    darkMode: ["class"], content: ["./src/**/*.{html,js,jsx,ts,tsx}"], theme: {
        extend: {
            fontFamily: {
                code: ['FiraCode'],
                lxgw: ['LXGW'],
            },
            colors: {
                tdc: 'var(--theme-default-color)',
                tdc2: 'var(--theme-default-color-2)',
                bdc: 'var(--backend-default-color)',
                bdcs: 'var(--backend-default-color-shadow)'
            },
            keyframes: {
                rain: {
                    '0%': {transform: 'translateY(0) scaleY(1)'},
                    '70%': {transform: 'translateY(180px) scaleY(1)'},
                    '80%': {transform: 'translateY(180px) scaleY(0.2)'},
                    '100%': {transform: 'translateY(180px) scaleY(0.2) scaleX(15)'},
                }
            },
            animation: {
                rain: 'rain 0.8s linear infinite'
            }

        }
    }, plugins: [{
        'tailwindcss/nesting': require('postcss-nesting'),
    }],
};
