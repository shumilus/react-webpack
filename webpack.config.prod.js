const { merge } = require('webpack-merge');
const common = require('./webpack.config');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
    mode: 'production',
    devtool: 'nosources-source-map',
})
