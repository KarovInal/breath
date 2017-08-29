var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].build.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  }
}