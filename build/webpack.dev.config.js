const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let entryPath = 'src/index.html';
module.exports = {
    entry: entryPath,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['views-loader']
            }, {
                test: /\.(css|less)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'less-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.(jpg|png|git|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'views/dist/views.js',
            "@": path.resolve(__dirname, '../src'),
            "@/router": path.resolve(__dirname, '../src', 'router'),
            "@/views": path.resolve(__dirname, "../src", "views")
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'测试title',
            template:entryPath,
            filename:''
        })
    ]
};