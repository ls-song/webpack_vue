const path = require("path");
const Uglify = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicImportWebpack=require('babel-plugin-dynamic-import-webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.vue', '.js', '.json', 'less'],
        alias: {
            'vue': 'vue/dist/vue.js',
            "@": path.resolve(__dirname, '../src'),
            "@/views": path.resolve(__dirname, ",,/src/views"),
            "@/assets": path.resolve(__dirname, "../src/assets")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }, {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            }, {
                test: /\.(jpg|png|git|svg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]?[hash]',
                            output: '../assets/images'
                        }
                    }
                ]
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, '../src'),
                use:['babel-loader']
            }
        ]
    },
    //用于生产模板和各项功能
    plugins: [
        new Uglify(),
        new VueLoaderPlugin(),
        new DynamicImportWebpack(),
        new HtmlWebpackPlugin({
            title: 'webpack搭建vue',
            filename: 'index.html',
            template: './publish/index.html',
            inject: true,
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};