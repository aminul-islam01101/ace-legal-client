/* eslint-disable import/no-extraneous-dependencies */
const daisyPlugin = require('daisyui');
const Form = require('@tailwindcss/forms');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            width: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
            maxWidth: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
        },
    },
    plugins: [daisyPlugin, Form],
    daisyui: {
        styled: true,
        themes: false,
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
