const OFF = "off";
const ERROR = "error";

module.exports = {
  plugins: ["jest"],
  rules: {
    "jest/consistent-test-it": [ERROR, { fn: "it" }],
    "jest/no-focused-tests": ERROR,
    "jest/valid-expect": ERROR,
    "jest/valid-expect-in-promise": ERROR,
    "gabo-test": ERROR
  },
  overrides: [
    {
      files: ["*.functional.*", "**/functional/**/*.*"],
      rules: {
        "jest/valid-expect": OFF,
        "jest/valid-expect-in-promise": OFF
      }
    },
    {
      files: ["*.test.*"],
      rules: {
        "dot-notation": OFF
      }
    }
  ]
};
