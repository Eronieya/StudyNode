const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {
  VueLoaderPlugin
} = require('vue-loader');

module.exports = env => {
  return {
    mode: process.env.NODE_ENV,
    entry: './src/main.js',
    output: {
      filename: '[name].[hash:8].js',
      path: path.resolve(process.cwd(), 'dist'),
      clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'assets'),
      },
      hot: true,
      compress: true,
      port: '8080',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'VueFrame',
        filename: 'index.html',
        template: path.resolve(process.cwd(), './public/index.html')
      }),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|hdr|basis)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'imgs/[hash][ext][query]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.json$/i,
          type: 'json'
        },
      ]
    }
  }
};