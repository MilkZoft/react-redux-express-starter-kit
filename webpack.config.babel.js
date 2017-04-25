// Dependencies
import webpack from 'webpack';
import path from 'path';
import ChunksPlugin from 'webpack-split-chunks';
import vendors from './vendors';

// Configuration
import { $webpack } from './src/lib/config';

// Environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Paths
const PATHS = {
  build: path.join(__dirname, $webpack().paths.build),
  src: path.join(__dirname, 'src')
};

// Apps
const APP = {
  home: path.join(__dirname, $webpack().app.home)
};

// Configuration
const getWebpackEntry = () => {
  return {
    home: APP.home,
    vendor: vendors.map(vendor => vendor.toString().replace(/\//g, ''))
  };
};

const getWebpackOutput = () => {
  return {
    path: PATHS.build,
    filename: '[name].bundle.js'
  };
};

const getWebpackPlugins = () => {
  const plugins = [
    new ChunksPlugin({
      to: 'vendor',
      test: /node_modules/
    })
  ];

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    );
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }

  return plugins;
};

const getWebpackLoaders = () => {
  return [
    {
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATHS.src
    }
  ];
};

const getWebpackDevServer = () => {
  if (!isDevelopment) {
    return {};
  }

  return {
    contentBase: PATHS.src,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
  };
};

const getWebpackDevTool = () => $webpack().devtool;

export default {
  devtool: getWebpackDevTool(),
  entry: getWebpackEntry(),
  output: getWebpackOutput(),
  devServer: getWebpackDevServer(),
  plugins: getWebpackPlugins(),
  module: {
    loaders: getWebpackLoaders()
  }
};
