<p>
  <a href="http://fuerzastudio.com" target="_blank">
    <img width="300" src="https://user-images.githubusercontent.com/13263721/134409198-470b3841-e4ad-4bbe-8887-d2b62e9eb4d9.png" alt="Fuerza Studio" />
  </a>
</p>

# Front-end challenge (entry-level)
We saw that you are interested in our challenge. So get ready, because it will test your skills in: HTML, CSS and JavaScript, so that you can demonstrate your full potential to work with amazing projects.

## Summary

- [The challenge]($the-challenge)
- [How to delivery](#how-to-delivery)
- [Quick Overview]($quick-overview)
- [Importing Assets]($importing-assets)
- [Features](#features)
- [Requirements](#requirements)

## The challenge
This challenge will test your skills as a front-end developer to work with the biggest CMS on the web, WordPress. Some HTML are already included as they are what WP itselv delivers by default, so they cannot be changed.

### What we need to be done
Develop the proposed layout with the **maximum** fidelity possible (we care a lot about the quality of delivery) and with a clean and reusable code.

### Layout
You can find the layout [here](https://www.figma.com/file/VDkvi1LXOp0lLCPg91tfAW/Front-end-Test?node-id=0%3A1&t=0ZPK70iy8ZhsvPhG-0).

### What we expect?
- Ability to understand a new one structure;
- Delivery a [perfect-pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) and responsiveness layout;
- Ability to delivery a clean code project that others developers can understand;
- The use of [BEMCSS](http://getbem.com/) pattern;
- The use of [component-driven](https://www.componentdriven.org/) methodology;

## How to delivery
[Cloning the repository](https://www.loom.com/share/db15fe7da3e54f928acbaf81eade3f08)

- Create a new repository and set it **private**;
- Clone this repository;
- Add your private repository as a remote, so you can push it:
  `git remote add upstream git@github.com:YOUR_USERNAME/frontend-challenge.git`
- Create a new branch:
  `git checkout -b challenge`
- After you've finished your code, push to your repository: `git push upstream challenge`
- Publish the result on a free server (heroku, netlify, etc)
- Add @fuerzastudio as a collaborator for it (**only after finished**). This GitHub account (@fuerzastudio) is solely used by Fuerza engineers to download and review it.

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
