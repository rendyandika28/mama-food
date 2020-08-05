const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
      ],
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, ],
    }, ],
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
};