const { override, fixBabelImports } = require("customize-cra");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config) {
  config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }], config); // { "legacy": true }一定不能掉，否则报错
  return config;
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
