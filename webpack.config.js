const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'src/app-main.html'),

  output: {
    filename: 'index.js',
    chunkFilename: './assets/[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'bower_components'),
    ],
    descriptionFiles: ['package.json'],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'polymer-webpack-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9090,
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'Demo',
      template: path.resolve(__dirname, 'index.ejs'),
      inject: false,
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
        to: 'bower_components/webcomponentsjs/[name].[ext]',
      },
    ]),
  ],
};
