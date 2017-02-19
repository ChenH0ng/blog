// import ExtractTextPlugin from 'extract-text-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Path = require('path');


module.exports = {
	context:Path.resolve(__dirname,'../src'),
	entry: './client.js',
	output: {
		path: Path.resolve(__dirname,'../dist'),
		filename: 'client.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './template.html',
		}),
	],
};