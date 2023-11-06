const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        use: [
          // loaderは下から読み込まれるためこの順番でないとエラーになる
          // CSSを'css-loder'で読み込んで、'miniCssExtractPlugin'で適用させる
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
        // use: [
        //   // {
        //   //   loader: 'url-loader',
        //   //   options: {
        //   //     esModule: false
        //   //   }
        //   // }
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       esModule: false,
        //       name: 'images/[name].[ext]'
        //     }
        //   }
        // ]
      },
      {
        test: /\.pug/,
        use : [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
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
      template: './src/templates/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename: 'members/taro.html'
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, 'src'),
  },
}