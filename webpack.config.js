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
        },
        {
            test: /.less?$/,
            loader: "style!css!less",
            exclude: /node_modules/
        }
    ]
  },
  externals: {
        "react": "React",
        'react-dom': 'ReactDOM'
    }
};
