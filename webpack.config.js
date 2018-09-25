const path = require('path');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const parts = require('./webpack.parts');

const paths = {
  lib: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'lib')
};

const lintJSOptions = {
  emitWarning: true,

  // Fail only on errors
  failOnWarning: false,
  failOnError: true,

  // Toggle autofix
  fix: true,

  formatter: require('eslint-friendly-formatter')
};

const commonConfig = merge([
  {
    devtool: 'source-map',
    entry: {
      lib: paths.lib
    },
    output: {
      path: paths.build,
      library: 'Demo',
      libraryTarget: 'umd'
    },
    plugins: [
      new FriendlyErrorsPlugin()
    ]
  },
  parts.lintJS({ include: paths.lib, options: lintJSOptions }),
  parts.loadJS({ include: paths.lib })
]);

const libraryConfig = merge([
  commonConfig,
  {
    mode: 'development',
    output: {
      filename: '[name].js'
    }
  }
]);

const libraryMinConfig = merge([
  commonConfig,
  {
    mode: 'production',
    output: {
      filename: '[name].min.js'
    },
  },
  parts.minifyJS({
    terserOptions: {
      parse: {
        // we want terser to parse ecma 8 code. However, we don't want it
        // to apply any minfication steps that turns valid ecma 5 code
        // into invalid ecma 5 code. This is why the 'compress' and 'output'
        // sections only apply transformations that are ecma 5 safe
        // https://github.com/facebook/create-react-app/pull/4234
        ecma: 8,
      },
      compress: {
        ecma: 5,
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebook/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        ecma: 5,
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebook/create-react-app/issues/2488
        ascii_only: true,
      },
    },
    // Use multi-process parallel running to improve the build speed
    // Default number of concurrent runs: os.cpus().length - 1
    parallel: true,
    // Enable file caching
    cache: true,
    sourceMap: true,
  })
]);

module.exports = env => (
  env === 'production'
    ? [libraryMinConfig, libraryConfig]
    : libraryConfig
);
