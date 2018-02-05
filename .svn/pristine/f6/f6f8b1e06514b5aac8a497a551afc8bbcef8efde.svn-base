'use strict'
var webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function resolveApp(relativePath) {
  return path.resolve(relativePath);
}
module.exports = {
  entry: {
    app: ["babel-polyfill",'./src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery':'jquery',
      'lockr': 'lockr',
      'src': path.resolve(__dirname, '../src'),
      'api': path.resolve(__dirname, '../src/api'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'directives': path.resolve(__dirname, '../src/directive'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'router': path.resolve(__dirname, '../src/router'),
      'store': path.resolve(__dirname, '../src/store'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'static': path.resolve(__dirname, '../static')
    },
    symlinks: false
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      favicon: resolveApp('favicon.ico')
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      ls: "lockr",
      
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
