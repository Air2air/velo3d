const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|json)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    minimizer: [
      (compiler) => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({
          terserOptions: {
            compress: {},
          },
        }).apply(compiler);
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
};