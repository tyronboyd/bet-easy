// common webpack config optopns
//
var path = require('path');
var ExtractCssPlugin = require("extract-text-webpack-plugin");

module.exports = ({
	loaders: [
		{
			test: /\.css$/,
			loader: ExtractCssPlugin.extract("style-loader", "css-loader")
		},
		{
			test: /\.scss$/,
			loader: ExtractCssPlugin.extract('style-loader', 'css?modules&camelCase=dashes!sass'),
			exclude: path.join(__dirname, '../node_modules/')
		},
		{
			// required by bootstrap.css
			test: /\.(eot|svg|ttf|woff2?)$/,
			loader: 'file'
		},
		{
			test: /\.json?$/,
			loader: 'json'
		}
	],
	plugins: [
		new ExtractCssPlugin("[name].[hash].css")
	],
	srcPath: '../src/',
	appPath: '../src/app/',
	exportPath: '../dist/'
});
