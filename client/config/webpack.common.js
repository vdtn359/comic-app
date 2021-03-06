const path = require('path');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const config = require('./config');
const helpers = require('./helpers');

const commonConfig = merge([
	parts.baseConfig(),
	parts.lintTypeScript(),
	parts.loadJavaScript({
		exclude: /node_modules/
	}),
	parts.loadImages({
		loader: 'url-loader',
		options: {
			limit: 15000,
		}
	}),
	parts.loadFonts({
		loader: 'url-loader',
	}),
	parts.loadTypeScript(),
	parts.loadHTML(),

	parts.extractBundles([
		{
			name: ['app', 'vendor', 'polyfill']
		},
		{
			name: 'manifest',
			minChunks: Infinity
		}
	]),
	parts.loadJQuery()
]);

module.exports = commonConfig;