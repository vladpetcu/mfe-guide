const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketingRemote@http://localhost:8081/remoteEntry.js",
        auth: "authRemote@http://localhost:8082/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
      // shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
