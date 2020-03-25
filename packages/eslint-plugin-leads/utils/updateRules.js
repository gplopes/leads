const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const getCustomRules = config => {
  const rules = {};
  config.plugins.forEach(pluginName => {
    const pluginPath = pluginName.includes("@")
      ? `${pluginName}/eslint-plugin`
      : `eslint-plugin-${pluginName}`;
    rules[pluginName] = require(pluginPath).rules;
  });

  return rules;
};

const renameFunctionRules = rules => {
  const newRules = {};
  Object.keys(rules).forEach(pluginKey => {
    Object.keys(rules[pluginKey]).forEach(fnName => {
      const newName = `${pluginKey}/${fnName}`;
      newRules[newName] = rules[pluginKey][fnName];
    });
  });
  return newRules;
};

const updateRules = config => {
  return pipe(getCustomRules, renameFunctionRules)(config);
};

module.exports = {
  updateRules
};
