const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssImport = require('postcss-import');


module.exports = function (env) {

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('../css/[name].bundle.css')
  ];

  const config =  {
    entry: {
      core: [
        path.resolve(__dirname, 'pllug/frontend/stylesheets/common.css'),
        path.resolve(__dirname, 'pllug/frontend/js/entry.js')
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
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader', 'postcss-loader'
        ),
        exclude: /node_modules/
      }
    ]},
    plugins: plugins,
    postcss: function(){
      return [autoprefixer, precss, cssImport];
    }
  };

  if(env === 'prod') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  else if(env === 'dev') {
    config.devtool = 'sourcemap'
  }


  return config;
};
