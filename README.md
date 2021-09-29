<p>
  <a href="http://fuerzastudio.com" target="_blank">
    <img width="300" src="https://user-images.githubusercontent.com/13263721/134409198-470b3841-e4ad-4bbe-8887-d2b62e9eb4d9.png" alt="Fuerza Studio" />
  </a>
</p>

# Front-end challenge
Would you like to be part of a great team? Contribute with so many amazing project?
So, let's start by challenging you to create a front-end page with cool things.

## Summary

- [Quick Overview]($quick-overview)
- [Features](#features)
- [Requirements](#requirements)
- [Challenge](#challenge)
- [How to delivery](#how-to-delivery)

## Quick Overview

### Scripts
#### `yarn dev`
Run a local server on the port `9000`.

#### `yarn build`
Create the `dist` folder with all builded files.

#### `yarn serve`
After builded you can serve using the `http-server` package, by default the port will be `8080`.

#### `yarn lint`
Run lint for JavaScript and SASS.

## Importing assets
In order to process any asset (images, fonts, scripts, styles etc.) that asset must be at least one of the following:
- imported in the main `index.js` or any other file imported into it.
- referenced in the main `index.scss` or any other file imported into it.

This way only assets that are used will be processed, rather than every single file.

To help with importing assets, the webpack configuration supports a number of resolve aliases and module directories for easier asset referencing:

| Alias in JavaScript | Alias in SASS | Resolve |
| --- | --- |--- |
| `~/` | `~` | `node_modules/` |
| `@scripts/` | `~@scripts/` | `src/scripts/` |
| `@styles/` | `~@styles/` | `src/styles/` |
| `@images/` | `~@images/` | `src/images/` |
| `@fonts/` | `~@fonts/` | `src/fonts/` |
| `@dist/` | `~@dist/` | `dist/` |

## Features
- [SASS](https://sass-lang.com/) + [PostCSS](https://github.com/postcss/postcss) for stylesheets.
- ES6 for JavaScript. 
- Pure [Webpack](https://webpack.js.org/) to transpile and bundle assets, _create sprites, optimize images_, etc.
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) for synchronized browser development.
- JavaScript and SASS linting and fixing using a single yarn command _(comming)_.
- CSS package:
  - Bootstrap 5

## Requirements
- [Node.js](https://nodejs.org/en/) >= 12
- [Yarn](https://yarnpkg.com/en/) or NPM

## Challenge

### What you need to do?
Develop the proposed layout, understanding our structure and following our patterns.
You'll find more comments on HTML file explaining more detailed about what to do on each section.

### What we expect?
- Ability to understand a new one structure;
- Delivery a [perfect-pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) and responsiveness layout;
- Ability to delivery a clean code project that others developers can understand;
- The use of [BEMCSS](http://getbem.com/) pattern;
- The use of [component-driven](https://www.componentdriven.org/) methodology;

### Layout
You can find the layout [here](https://xd.adobe.com/view/69a63362-cda6-4ac4-b225-0ba7162b4e42-3cf5/grid).

## How to delivery
[Video](https://www.loom.com/share/db15fe7da3e54f928acbaf81eade3f08)

- Create a new repository and set it **private**;
- Clone this repository;
- Add your private repository as a remote, so you can push it:
  `git remote add upstream git@github.com:YOUR_USERNAME/frontend-challenge.git`
- Create a new branch:
  `git checkout -b challenge`
- After you've finished your code, push to your repository: `git push upstream challenge`
- Publish the result on a free server (heroku, netlify, etc)
- Add @fuerzastudio as a collaborator for it (**only after finished**). This GitHub account (@fuerzastudio) is solely used by Fuerza engineers to download and review it.

Good Luck! 🤞🏽
