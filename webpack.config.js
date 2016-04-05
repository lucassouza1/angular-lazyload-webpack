var path = require('path');
var basePath = path.join(__dirname, 'assets');

var config = {
  entry: {
    app: ['./src/core/bootstrap.js'],
  },
  output: {
    path: path.join(basePath, 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
  },
  module: {    
    noParse: [],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.json$/, loader: 'json'},
      { test: /\.html$/, loader: 'raw' },
    ]
  },
  devtool: "source-map",
  debug: true
};

module.exports = config;
