const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const indextInput = "./src/index.html";
module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    // publicPath: "http://localhost:9001/",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9001,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif|woff|otf|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
            publicPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // filename: indexOutput,
      template: indextInput,
    }),
  ],
};
