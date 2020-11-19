/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
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
    /* ... */
  },
  proxy: {
    /* ... */
  },

  alias: {
    /* ... */
  },
};
