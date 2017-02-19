const Path = require('path');

module.exports = {
    entry: Path.resolve(__dirname, '../src/server.js'),
    output: {
        path: Path.resolve(__dirname, '../dist'),
        filename: 'server.js',
    },
    devtool: 'eval',
    target:'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel-loader',
            },
        ],
    },
};