const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'Client', "index.jsx"),
  output: {
    path: path.join(__dirname, 'Public'),
    publicPath: '/',
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}