
// module.exports = {
//   entry: './js/gdSite2016.js',
//   output: {
//     path: __dirname,
//     filename: './gdSite2016Bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         test: /\.css$/,
//         loader: 'style!css!'
//       }
//     ]
//   }
// };


var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  //devtool: debug ? "inline-sourcemap" : null,
  entry: "js/gdSite2016.es6",
  output: {
    path: __dirname, // + "./js/",
    //filename: "es6Bundled/gdSite2016.js"
    filename: 'index.js',
    sourceMapFilename: "./bundle.map"
  },
  module: {
    loaders: [
      {
        // test: /\.js$/, loader: 'babel-loader',
        // exclude: /node_modules/,
        // test: /\.css$/, loader: 'style!css!'
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.css$/,
        loader: 'style!css!'
      }
    ]
  }
  // plugins: debug ? [] : [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     mangle: false,
  //     sourcemap: false
  //   }),
  // ]
}
