const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const merge = require('webpack-merge')
const config = {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: '8080'
    }
};

module.exports=merge(commonConfig,config);
