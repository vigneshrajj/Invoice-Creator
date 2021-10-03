const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            cursor: ['disabled'],
            textColor: ['disabled'],
        },
    },
    plugins: [],
};
