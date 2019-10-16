const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const path = require('path');
let devConfig = {
    mode:'development',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|less)/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'less-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
};

module.exports = merge(commonConfig, devConfig);