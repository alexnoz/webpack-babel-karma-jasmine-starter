# Webpack Babel Karma Jasmine Starter

A simple Webpack boilerplate for building client-based libraries in ES6.

## Features

* Test setup with [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/1.0/index.html)
* Code coverage with [Istanbul](https://istanbul.js.org)
* [ESLint](http://eslint.org/) with the following plugins:
  * [import](https://github.com/benmosher/eslint-plugin-import) plugin
  * [node](https://github.com/mysticatea/eslint-plugin-node) plugin
  * [compat](https://github.com/amilajack/eslint-plugin-compat) plugin
  * [promise](https://github.com/xjamundx/eslint-plugin-promise) plugin
  * [jasmine](https://github.com/tlvince/eslint-plugin-jasmine) plugin

## Getting started

1. Run `yarn install` to get the project's dependencies
2. Open `webpack.config.js` and change the `output.library` property to the name of your library
3. Run `yarn start` to start developing

## Scripts

* `yarn start` - produces a non-minified dev version of your library and runs a watcher for the webpack config and for the library
* `yarn build` - produces both a non-minified and a minified production versions of your library
* `yarn test` - runs tests and generates a coverage report under the `coverage` folder
* `yarn test:watch` - runs tests in the watch mode
