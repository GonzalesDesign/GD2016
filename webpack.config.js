var debug = process.env.NODE_ENV !== "production";
var webpack = require( 'webpack' );

module.exports = {
	context: __dirname,
	//devtool: debug ? "inline-sourcemap" : null,
	//entry: 'js/index.js',
	entry: './js/index.es6',
	output: {
		path: __dirname,
		//filename: './js/webpacked/index.es6',
		filename: './distX/index.js', //this gets created when u=you run webpack -p --w
		sourceMapFilename: "./bundle.map"
	},
	devtool: "#source-map",
	module: {
		loaders: [ {
			//test: /\.js$/,
			//test: /\.es6$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			test: /\.css$/,
			loader: 'style!css!',
			// Options to configure babel with
			//   query: {
			//     modules: ['transform-runtime'],
			//     presets: ['es2015'],
			//   }
		} ]
	}
};
