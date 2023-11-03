const path = require('path');

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
          //  loaderは下から読み込まれるためこの順番でないとエラーになる
          // CSSを'css-loder'で読み込んで、'style-loader'で適用させる
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}