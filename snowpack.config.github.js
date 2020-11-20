/** @type {import("snowpack").SnowpackUserConfig } */
const baseConfig = require('./snowpack.config.production')

module.exports = {
    ...baseConfig,
    mount: {
        web_modules: '/ywc18-homework/web_modules',
        public: '/ywc18-homework',
        src: '/ywc18-homework/_dist_',
    },
    buildOptions: {
        webModulesUrl: 'ywc18-homework/web_modules',
    },
}
