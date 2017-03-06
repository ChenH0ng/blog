const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const Path = require('path');

module.exports = {
    output: {
		path: Path.resolve(__dirname,'../dist'),
        publicPath: '//chenh0ng.com/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz",
            algorithm: "gzip",
            test: /\.js$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
};