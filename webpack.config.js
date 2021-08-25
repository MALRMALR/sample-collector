const path = require('path');

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
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    hot: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      }
    }
  },
  module: {
    rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ],   
  },
}