"use strict";

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'home': './src/index.js',
        'profile': './Areas/Profile/src/index.js',
        'reports': './Areas/Reports/src/index.js',
        'vendor': ['react', 'react-dom'],
        'router': ['react-router-bootstrap', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js/dist'),
        publicPath: "/dist/",
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                //exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
    resolve: {
        extensions: ['.js', '.jsx', '.json']
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
        //        PUBLIC_URL: "https://localhost/React03"
        //    }
        //}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
