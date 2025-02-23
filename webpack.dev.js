// webpack.config.js
const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
   output: {
    filename: "mainDev.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    open: true,
  },
  
});