const nodeExternals = require("webpack-node-externals");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ]
  },
  target: "node",
  externals: [nodeExternals()],
  plugins: [new LodashModuleReplacementPlugin()]
};
