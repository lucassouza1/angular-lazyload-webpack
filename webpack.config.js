var path = require('path');

var config = {
  entry: {
    app: ['./src/core/bootstrap.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
  },
  module: {    
    noParse: [],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
    ]
  },
  devtool: "sourcemap",
  debug: true
};

module.exports = config;
