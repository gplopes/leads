const OFF = "off";
const ERROR = "error";

module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/camelcase": OFF,
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-empty-interface": OFF,
    "@typescript-eslint/ban-ts-ignore": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-unused-vars": [
      ERROR,
      { args: "none", ignoreRestSiblings: true }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      ERROR,
      {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public"
        }
      }
    ],
    "@typescript-eslint/no-inferrable-types": [
      ERROR,
      { ignoreParameters: true }
    ]
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": OFF
      }
    },
    {
      files: ["*.js", "*.test.tsx", "*.test.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": OFF
      }
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": OFF
      }
    }
  ]
};
