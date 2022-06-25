const { checkPlugin } = require("awesome-typescript-loader");

module.exports = () => ({
  entry: "./src/index.ts",
  output: {
    publicPath: "/build",
    filename: "./bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", "*.js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: "/node_modules/",
        loader: "awesome-typescript-loader",
      },
    ],
  },
  mode: "development",
  //watch: true,
  devServer: {
    port: 8080,
    static: {
      directory: "./dist",
    },
  },
});
