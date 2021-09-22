# Front-end boilerplate

A modern Front-end boilerplate which uses the Webpack module bundler.

## Summary

- [Quick Overview]($quick-overview)
- [Features](#features)
- [Requirements](#requirements)

## Quick Overview

### Scripts
#### `yarn dev`
Run a local server on the port `9000`.

#### `yarn build`
Create the `dist` folder with all builded files.

#### `yarn serve`
After builded you can serve using the `http-server` packages, by default the port will be `8080`.

#### `yarn lint`
Run lint for JavaScript and SASS.

_More commands is comming_

## Features
- [SASS](https://sass-lang.com/) + [PostCSS](https://github.com/postcss/postcss) for stylesheets.
- ES6 for JavaScript. 
- Pure [Webpack](https://webpack.js.org/) to transpile and bundle assets, create sprites, optimize images etc.
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) for synchronized browser development.
- JavaScript and SASS linting and fixing using a single yarn command _(comming)_.
- CSS package:
  - Bootstrap 5

## Requirements
- [Node.js](https://nodejs.org/en/) >= 12
- [Yarn](https://yarnpkg.com/en/) or NPM
