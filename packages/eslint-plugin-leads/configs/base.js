const { OFF, ERROR } = require("../utils/constants");

module.exports = {
  extends: ["pipedrive/es9", "plugin:prettier/recommended"],
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    mocha: true
  },
  rules: {
    "global-require": OFF,
    "import/no-named-as-default": OFF,
    "prefer-arrow-callback": OFF,
    "no-bitwise": OFF,
    camelcase: OFF,
    "require-atomic-updates": OFF,
    "max-params": OFF,
    "padding-line-between-statements": OFF,
    eqeqeq: [ERROR, "smart"],
    curly: ERROR,
    "callback-return": ERROR,
    "no-undefined": OFF,
    "default-case": ERROR,
    "import/order": [ERROR, { "newlines-between": "always" }],
    "no-restricted-imports": [
      ERROR,
      {
        paths: ["lodash"]
      }
    ]
  }
};
