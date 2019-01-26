"use strict";

const path = require('path');
const __home = path.resolve(__dirname, '');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'home': './src/index.js',
        'profile': './Areas/Profile/src/index.js',
        'reports': './Areas/Reports/src/index.js',
        'vendor': ['react', 'react-dom'],
        'router': ['react-router-bootstrap', 'react-router-dom']
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                //exclude: /node_modules/,
                use: [
                    'style-loader', MiniCssExtractPlugin.loader, 'css-loader',
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/'),
        publicPath: "/dist/",
        filename: './js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json']
    },
    devtool: "inline-source-map",
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    plugins: [
        //new webpack.DefinePlugin({
        //    "process.env": {
        //        NODE_ENV: JSON.stringify("development"),
        //        PUBLIC_URL: "https://localhost/React05"
        //    }
        //}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
