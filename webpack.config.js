const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test : /\.css$/,
        use:["style-loader","css-loader"] //뒤부터 적용됨
      },
      {
        test : /\.scss$/,
        use:["style-loader","css-loader", "sass-loader"] //뒤부터 적용됨
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};

