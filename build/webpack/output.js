/**
 * 
 * Internal dependencies.
 * 
 */
const { distPath } = require('../lib/utils');

/**
 * 
 * Webpack entry file(s).
 * 
 */
module.exports = {
  path: distPath(),
  filename: 'app.js'
};
