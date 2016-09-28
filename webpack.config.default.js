const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssImport = require('postcss-import');
const entries = require('./manifest.json');

function getEntryPoints(entries) {
  const basePath = path.join(__dirname, 'pllug/frontend');

  for(var i in entries) {
    const entry = entries[i];
    if(typeof entry === 'string') {
        entries[i] = path.resolve(basePath, entry);
    } else {
      entries[i] = entry.map(name => {
        return path.resolve(basePath, name);
      });
    }
  }

  return entries;
}

module.exports = function (env) {

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('../css/[name].bundle.css')
  ];

  const config =  {
    entry: getEntryPoints(entries),
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
