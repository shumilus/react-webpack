const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.config');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        // eslint-disable-next-line no-undef
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true
    }
})
