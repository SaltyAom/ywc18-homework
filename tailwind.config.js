const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: ['./src/**/*'],
    theme: {
        extend: {},
        colors: {
            ...colors,
            primary: {
                default: '#283b7c'
            },
            secondary: {
                default: '#21c300'
            }
        }
    },
    variants: {},
    plugins: []
}
