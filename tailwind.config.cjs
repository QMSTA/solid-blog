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
        }
    }, plugins: [{
        'tailwindcss/nesting': require('postcss-nesting'),
    }],
};
