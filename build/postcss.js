/**
 * 
 * Setup PostCSS Plugins.
 * 
 */
const plugins = [
  require('postcss-discard-comments'),
  require('autoprefixer')
];

const config = {
  postcssOptions: {
    plugins
  }
};

module.exports = config;