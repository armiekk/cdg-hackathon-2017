var webpack = require('webpack');
var path = require('path');

module.exports = function () {
    return {
        context: path.resolve(__dirname, 'app'),
        entry: {
            main: './index.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader?cacheDirectory=true',
                        options: {
                            presets: ['env'],
                            plugins: [
                                require('babel-plugin-transform-async-to-generator'),
                                require('babel-plugin-transform-object-rest-spread')
                            ]
                        },
                    }
                }
            ]
        }
    }
}