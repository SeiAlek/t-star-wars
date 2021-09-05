const rules = {
  "no-trailing-spaces": ["error"],
  "no-undef": ["error"],
  "no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_|ctx|req|res|next|queryInterface|Sequelize|DataTypes", varsIgnorePattern: "^_" },
  ],
  "no-multiple-empty-lines": ["error"],
  "object-curly-spacing": ["error", "always"],
  "object-shorthand": "error",
  quotes: ["error", "single"],
  indent: ["error", 2],
  "comma-dangle": ["error", "always-multiline"],
  "array-element-newline": ["error", "consistent"],
  "space-infix-ops": ["error", { int32Hint: false }],
  "comma-spacing": ["error", { before: false, after: true }],
  "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
  "keyword-spacing": ["error"],
  "space-before-blocks": ["error"],
  "require-await": ["error"],
  "react-hooks/rules-of-hooks": "error",
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "react-app",
    "airbnb",
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    ...rules,
  },
  overrides: [{
    files: ["src/**/*.js"],
  }],
};
