
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new ExtractTextPlugin("main.css")
    ],
    module: {
        loaders: [
            {
                test: /\.scss/,
                //loader: 'style-loader!css-loader!sass-loader'
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader', {
                    allChunks: true
                })
            }
        ]
    }
};
