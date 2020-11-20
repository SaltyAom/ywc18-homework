/** @type {import("snowpack").SnowpackUserConfig } */
const baseConfig = require('./snowpack.config')

module.exports = {
    ...baseConfig,
    buildOptions: {
        minify: false
    },
    plugins: [
        ...baseConfig.plugins,
        [
            'snowpack-plugin-terser',
            {
                terserOptions: {
                    compress: {
                        arguments: true,
                        passes: 2,
                        unsafe_arrows: true
                    }
                }
            }
        ]
    ]
}