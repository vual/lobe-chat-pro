const config = require('@lobehub/lint').remarklint;

module.exports = {
  ...config,
  plugins: ['remark-mdx', ...config.plugins],
};
