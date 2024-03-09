const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*", "public/**/*"],
    liveReload: true,
    client: {
      overlay: true,
    },
  },
});
