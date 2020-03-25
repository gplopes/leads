const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
let PLUGINS = [];

const isPluginRule = rule =>
  PLUGINS.map(plugin => rule.startsWith(plugin)).filter(Boolean)[0];

const stripPlugins = config => {
  PLUGINS = [...config.plugins];
  return { ...config, plugins: [] };
};

const addRulesPrefix = config => {
  const newRules = Object.keys(config.rules).reduce((allRules, ruleKey) => {
    const ruleName = isPluginRule(ruleKey) ? `leads/${ruleKey}` : ruleKey;
    return { ...allRules, [ruleName]: config.rules[ruleKey] };
  }, {});
  return { ...config, rules: newRules };
};

const updateConfig = config => {
  return pipe(stripPlugins, addRulesPrefix)(config);
};

module.exports = {
  updateConfig
};
