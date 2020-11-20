/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        '@snowpack/plugin-dotenv',
        '@prefresh/snowpack',
        'snowpack-plugin-stylus',
        '@snowpack/plugin-postcss',
        '@snowpack/plugin-typescript'
    ],
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
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        '@app': './src',
        '@pages': './src/pages',
        '@styles': './src/styles',
        '@layouts': './src/layouts',
        '@components': './src/components',
        '@icons': './src/icons',
        '@stores': './src/stores',
        '@libs': './src/libs'
    }
}
