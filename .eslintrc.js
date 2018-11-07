module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  settings: {},

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },

  env: {
    es6: true,
    browser: true,
    node: true
  },

  root: true,

  rules: {}
};
