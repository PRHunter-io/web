module.exports = {
  /* config options here */
  experimental: {
    scrollRestoration: true,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
