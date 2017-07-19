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

## Scripts

* `npm start` - produces a non-minified dev version of your library and runs a watcher for the webpack config and for the library
* `npm run build` - produces both a non-minified and a minified production versions of your library
* `npm test` - runs tests and generates a coverage report under the `coverage` folder
* `npm test:watch` - runs tests in the watch mode
