// import ExtractTextPlugin from 'extract-text-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Path = require("path");

module.exports = {
    context: Path.resolve(__dirname, "../src"),
    entry: "./client.js",
    output: {
        filename: "client.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./template.html"
        })
    ]
};
