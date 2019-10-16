const path = require('path');
const webpack = require('webpack');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let entryPath = 'src/index.html';

module.exports = {
    entry:entryPath,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['views-loader']
            }, {
                test: /\.(jpg|png|git|svg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',//根据图片大小把图片优化为base64
                        options: {
                            limit: 10000,
                            name() {
                                if (process.env.NODE_ENV == 'development') {
                                    return "[path][name].[ext]"
                                }
                                return "[hash].[ext]"
                            },
                            outputPath: "images"
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpg: {
                                progressive: true,
                                quality: 65
                            }, optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }, {
                test: /\.js/,
                exclude: /node_modules/,//不处理以下目录中的js
                include: /src/,//只处理以下目录下的js
                use: ['bable-loader']
            }
        ]
    },
    resolve: {
        "@": path.resolve(__dirname, '../src'),
        "@/route": path.resolve(__dirname, "../src/route"),
        "@/assets": path.resolve(__dirname, "../src/assets")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,//删除引用属性的引号
                collapseWhitespace: true,//删除空格
                removeComments: true
            }
        }),
        new VueLoaderPlugin()
    ]
};