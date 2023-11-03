const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // loaderは下から読み込まれるためこの順番でないとエラーになる
          // CSSを'css-loder'で読み込んで、'miniCssExtractPlugin'で適用させる
          {
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin()
  ]
}