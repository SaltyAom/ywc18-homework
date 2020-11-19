/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        web_modules: '/ywc18-homework/web_modules',
        public: '/ywc18-homework',
        src: '/ywc18-homework/_dist_',
        // src: '/_dist_',
    },
    plugins: ['@snowpack/plugin-dotenv', '@prefresh/snowpack'],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
      webModulesUrl: "ywc18-homework/web_modules"
    },
    proxy: {
        /* ... */
    },

    alias: {
    },
}
