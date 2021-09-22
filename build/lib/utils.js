/**
 * 
 * External dependencies.
 * 
 */
const { resolve, dirname } = require('path');

/**
 * Main paths functions.
 * Used to point to specific paths: root, src and dist.
 */
module.exports.rootPath = (basePath = '', destPath = '') => (
  resolve(dirname(__dirname), '..', basePath, destPath)
);

module.exports.srcPath = (basePath = '', destPath = '') => (
  resolve(dirname(__dirname), '../src', basePath, destPath)
);

module.exports.distPath = (basePath = '', destPath = '') => (
  resolve(dirname(__dirname), '../dist', basePath, destPath)
);

/**
 * 
 * Source paths.
 * 
 */
module.exports.srcScripts = (destPath) => (
  exports.srcPath('scripts', destPath)
);
module.exports.srcStyles = (destPath) => (
  exports.srcPath('styles', destPath)
);
module.exports.srcImages = (destPath) => (
  exports.srcPath('images', destPath)
);
module.exports.srcFonts = (destPath) => (
  exports.srcPath('fonts', destPath)
);

/**
 * 
 * Dist paths.
 * 
 */
module.exports.distScripts = (destPath) => (
  exports.distPath('scripts', destPath)
);

/**
 * 
 * Extensions testers.
 * 
 */
module.exports.tests = {
  scripts: /\.(js|jsx)$/,
  styles: /\.(css|scss|sass)$/,
  images: /(images).*\.(ico|jpg|jpeg|png|svg|gif)$/,
  fonts: /(fonts).*\.(eot|svg|ttf|woff|woff2)$/,
};