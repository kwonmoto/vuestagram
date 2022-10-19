module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    quotes: [2, "double", { avoidEscape: false }],
    "vue/no-multiple-template-root": 0,
    "no-console": "off",
  },
};
