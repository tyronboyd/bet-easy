const path = require('path');
const express = require('express');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = express();

if (isDeveloping) {
	const webpack = require('webpack');
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('./webpack/webpack-dev.config.js');
	const compiler = webpack(config);
	const middleware = webpackMiddleware(compiler, {
		publicPath: config.output.publicPath,
		contentBase: 'src',
		historyApiFallback: true,
		hot: true,
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false
		}
	}); 

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res) {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
		res.end();
	});
} else {
	app.use(express.static(__dirname + '/dist'));
	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(port, '0.0.0.0', function onStart(err) {
	if (err) {
		console.log(err);
	}
  if (isDeveloping) {
	  console.log('In development mode...');
	} else {
	  console.log('In production mode...');
	}
	console.info('Listening on http://localhost:%s/ in your browser.', port);
});
