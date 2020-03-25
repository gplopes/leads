const { CLIEngine } = require("eslint");
const merge = require("deepmerge");

const { updateRules } = require("./utils/updateRules");
const { updateConfig } = require("./utils/updateConfig");

const frontend = new CLIEngine({
  cache: true,
  eslintPath: require.resolve("eslint"),
  resolvePluginsRelativeTo: __dirname,
  configFile: require.resolve("./frontend")
}).getConfigForFile(require.resolve("./frontend"));

const backend = new CLIEngine({
  cache: true,
  eslintPath: require.resolve("eslint"),
  resolvePluginsRelativeTo: __dirname,
  configFile: require.resolve("./backend")
}).getConfigForFile(require.resolve("./backend"));

const allRules = merge(updateRules(frontend), updateRules(backend));

module.exports = {
  rules: allRules,
  configs: {
    raw: require("./frontend"),
    frontend: updateConfig(frontend),
    backend: updateConfig(backend)
  }
};
