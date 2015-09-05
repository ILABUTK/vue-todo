var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/app.js"],
    vendors: []
  },

  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.bundle.js"),
    new ExtractTextPlugin("build.css")
  ],

  module: {
    loaders: [
      {
        test: /\.vue$/, loader: vue.withLoaders({
          css: ExtractTextPlugin.extract("css"),
          stylus: ExtractTextPlugin.extract("css!stylus")
        })
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
    ]
  },
  devtool: "#source-map"
}
