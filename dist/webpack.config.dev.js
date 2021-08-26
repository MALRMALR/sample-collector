"use strict";

var path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    "static": {
      directory: path.join(__dirname, '/')
    },
    compress: true,
    hot: true,
    historyApiFallback: true,
    // this will server index.html in place of 404 responses
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Security-Policy": "*"
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
};