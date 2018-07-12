/**
 * Created by santanu on 13/7/18.
 */

var path = require('path');
var webpack = require('webpack');
module.exports = (env, argv) => {
    var config = {
        entry: './js/time-diff.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'time-diff.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        stats: {
            colors: true
        },
        mode: env
    };

    if( env === 'development' ) config.devtool = 'source-map';
    return config;
};