const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
//  entry: './src/index.js',
  entry: {
   app: './src/index.js',
//   print: './src/print.js'
//   another: './src/another-module.js'
//    index: './src/index.js'  
  },
  output: {
 //   filename: 'bundle.js',
    filename: '[name].[hash].js',
 //   chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
//    splitChunks: {
//      chunks: 'all'
//    },
//    runtimeChunk: {
//      name: "manifest",
//    },
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
	  test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
	  chunks: 'all'
	}  
      }
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'caching'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
	use: [
	  'style-loader',
	  'css-loader'
	]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
	use: [
	  'file-loader'
	]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
	  'file-loader'
	]
      }
    ]
  }
};
