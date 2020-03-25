module.exports = {
  extends: [
    "./configs/base",
    "./configs/typescript",
    "./configs/react",
    "./configs/jest.js"
  ].map(require.resolve)
};
