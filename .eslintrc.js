module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 13,
    requireConfigFile: false
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    indent: ["error", 2]
  }
};