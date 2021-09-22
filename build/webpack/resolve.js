/**
 * 
 * Internal dependencies.
 * 
 */
const utils = require('../lib/utils');

/**
 * 
 * Webpack resolve.
 * 
 */
module.exports = {
  modules: [utils.srcScripts(), 'node_modules'],
  extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  alias: {
    '@scripts': utils.srcScripts(),
    '@styles': utils.srcStyles(),
    '@images': utils.srcImages(),
    '@fonts': utils.srcFonts(),
    '@dist': utils.distPath(),
    '~': utils.rootPath('node_modules'),
  }
};
