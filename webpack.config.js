const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
	entry: './src/pages/index.js',
	devtool: 'eval-source-map',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},

	mode: 'development',

	devServer: {
		static: path.resolve(__dirname, 'dist'),
		open: true,
		port: 8081,
		compress: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, {
					loader: 'css-loader',
					options: { importLoaders: 1 }
				}, 'postcss-loader']
			},
			{
				test: /\.(jpg|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext]'
				}
			},
			{
				test: /.(woff2|woff)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext]'
				}
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			//filename: 'main.html'
		}),
		new MiniCssExtractPlugin()
	],
};