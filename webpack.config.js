var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: './frontend/src/js/main.js',
  output: {
    path: __dirname + '/frontend/dist/js',
    filename: 'bundle.js',
   },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
        "react": "React",
        'react-dom': 'ReactDOM'
    }
};
