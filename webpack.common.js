const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        main: [
            'react-hot-loader/patch',
            './src/index.js',
        ],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                enforce: "pre",
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }, {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new CleanWebPackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
};