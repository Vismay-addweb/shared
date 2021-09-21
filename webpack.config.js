// Generated using webpack-cli https://github.com/webpack/webpack-cli
const { resolve } = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  
  output: {
    path: resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.tsx',
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// if (isProd) {
//   config.optimization = {
//     minimizer: [new TerserWebpackPlugin()],
//   };
// } else {
  config.devServer = {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
// }

module.exports = config;