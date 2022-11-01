const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.config');

module.exports = merge(common, {
  mode: process.env.MODE,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
});
