var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

var path = require('path');
var basePath = path.join(__dirname, 'assets');

var config = {
  entry: {
    app: ['./src/core/bootstrap.js'],
  },
  output: {
    path: path.join(basePath, 'js'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
  },
  module: {    
    noParse: [],
    loaders: [
      { test: /angular-i18n\/angular-locale_.*\.js/, loader: 'bundle?name=[name]'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /resources_.*\.json$/, loader: 'promise?bluebird,[name]'},      
      { test: /\.json$/, loader: 'json'},
      { test: /\.html$/, loader: 'raw' },
    ]
  },
  plugins: [
    new ContextReplacementPlugin(/angular\-i18n$/, /^\.\/(en|es|pt)$/)
	],
  devtool: "source-map",
  debug: true
};

module.exports = config;
