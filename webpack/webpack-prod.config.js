'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var options = require('./options.js');

const webpackConfig = {
	// extract plugin adds a souce map url to css file & causes error
	// - not sure how else to get around
	devtool: 'source-map',
	entry: [
		path.join(__dirname, `${options.appPath}index`)
	],
	output: {
		path: path.join(__dirname, `${options.exportPath}`),
		filename: '[name]-[hash].min.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/index.html'),
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new CopyWebpackPlugin([
			 { from: path.join(__dirname, '../src/assets'), to: 'assets' }
	 ])
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: options.loaders,
		noParse: path.join(__dirname, '../node_modules/openlayers/')
	}
};

webpackConfig.module.loaders.push({
	test: /.jsx?$|.js?$/,
	include: path.join(__dirname, options.srcPath),
	exclude: path.join(__dirname, '../node_modules/'),
	loader: 'babel',
	query: {
		"presets": ["react", "es2015", "stage-1"]
	}
});

// add the common plugins from the options file
var plugins = options.plugins;
var pluginLength = plugins.length;
for (var i=0;i<pluginLength; i++) {
	webpackConfig.plugins.push(plugins[i]);
}

module.exports = webpackConfig;
