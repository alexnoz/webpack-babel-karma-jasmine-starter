const merge = require('webpack-merge');

const webpackConfig = merge([
  {
    devtool: '#inline-source-map',
    mode: 'none'
  },
  require('./webpack.parts').loadJS({
    exclude: /node_modules/
  })
]);

module.exports = config => {
  const src = './src/**/*.js';
  const tests = './test/index.js';

  process.env.BABEL_ENV = 'karma';

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcov' },
        { type: 'text-summary' }
      ]
    },

    // list of files / patterns to load in the browser
    files: [
      src,
      tests
    ],

    // list of files to exclude
    // exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [src]: ['webpack'],
      [tests]: ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    plugins: [
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-jasmine'
    ],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
