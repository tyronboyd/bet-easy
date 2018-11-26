'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var options = require('./options.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true&overlay=false',
		path.join(__dirname, `${options.appPath}index`)
	],
	output: {
		path: path.join(__dirname, `${options.exportPath}`),
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/index.html'),
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new CopyWebpackPlugin([
			 { from: path.join(__dirname, '../src/assets'), to: 'assets' }
	 ])
	],
	module: {
		loaders: options.loaders,
		noParse: path.join(__dirname, '../node_modules/openlayers/')
	},
	eslint: {
		configFile: './.eslintrc'
	}
};

webpackConfig.module.loaders.push({
	test: /.jsx?$|.js?$/,
	include: path.join(__dirname, options.srcPath),
	exclude: path.join(__dirname, '../node_modules/'),
	loader: 'babel',
	query: {
		"presets": ["react", "es2015", "stage-1", "react-hmre"]
	}
});

webpackConfig.module.loaders.push({
	test: /.jsx?$|.js?$/,
	exclude: path.join(__dirname, '../node_modules/'),
	include: path.join(__dirname, options.appPath),
	loader: 'eslint-loader'
});

// add the common plugins from the options file
var plugins = options.plugins;
var pluginLength = plugins.length;
for (var i=0;i<pluginLength; i++) {
	webpackConfig.plugins.push(plugins[i]);
}


module.exports = webpackConfig;
