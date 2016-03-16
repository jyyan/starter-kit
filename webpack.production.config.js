var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'frontend', 'index.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {

    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("style.css"),
    ],
    module: {
        loaders: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: [nodeModulesPath]
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
};

module.exports = config;
