'use strict';

const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  webpack: (config) => {

    config.entry.main = [
      './index.js'
    ];

    config.plugins = [
      new BabiliPlugin({ comments:false, sourceMap:false })
    ];

    config.output = {
      path: 'dist',
      filename: 'error.js',
      publicPath: '/',
      libraryTarget: 'commonjs2'
    };

    return config;
  }
};
