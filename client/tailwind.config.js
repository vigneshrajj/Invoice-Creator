const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'xl': {'max': '1279px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'sm': {'max': '639px'},
          }
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
