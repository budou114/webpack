const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // loaderは下から読み込まれるためこの順番でないとエラーになる
          // CSSを'css-loder'で読み込んで、'miniCssExtractPlugin'で適用させる
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}