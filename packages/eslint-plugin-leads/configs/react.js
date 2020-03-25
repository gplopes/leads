const { OFF, ERROR, WARNING } = require("../utils/constants");

module.exports = {
  extends: ["plugin:react/recommended", "plugin:relay/recommended"],
  plugins: ["react", "react-hooks", "relay"],
  settings: {
    "import/core-modules": ["redux-devtools-extension"],
    react: {
      version: "detect"
    }
  },
  rules: {
    "relay/generated-flow-types": OFF,
    "react/prop-types": OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react/no-array-index-key": WARNING
  }
};
