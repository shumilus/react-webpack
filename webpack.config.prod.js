const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: process.env.MODE,
  devtool: 'nosources-source-map',
});
