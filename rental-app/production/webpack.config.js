var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = function () {
    return {
        target: 'node',
        entry: {
            'server-compiled': './server.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname)
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader?cacheDirectory=true',
                    }
                }
            ]
        },
        plugins: [
            new UglifyJSPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            })
        ]
    }
};