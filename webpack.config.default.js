const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/styles.css')
  ];

  const config =  {
    entry: {
      core: [
        path.resolve(__dirname, 'pllug/frontend/js/entry.js'),
        path.resolve(__dirname, 'pllug/frontend/stylesheets/common.css')
      ]
    },
    output: {
      path: path.join(__dirname, 'pllug/static/js'),
      filename: '[name].bundle.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel?cacheDirectory=false',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'pllug/frontend'),
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', {
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader'
        })
      }]
    },
    resolve: {
      extensions: ['.js', '.css']
    },
    plugins: plugins
  };

  if(env === 'prod') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  else if(env === 'dev') {
    config.devtool = 'source-map'
  }


  return config;
};
