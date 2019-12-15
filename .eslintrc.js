module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  overrides: [
    {
      files: [
        "test/**/*.test.js",
        "test/**/*.test.ts",
      ],

      env: {
        jest: true,
      },

      rules: {
        "import/no-unresolved": ["error", {
          ignore: ["../"],
        }],
      },
    },
  ],

  extends: [
    "airbnb-base",
  ],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: [
    "@typescript-eslint",
  ],

  settings: {
    "import/resolver": {
      node: true,
    },
  },

  rules: {
    quotes: ["error", "double"],
    indent: ["error", "tab"],
    "no-tabs": ["off"],
    "class-methods-use-this": ["off"],
    "no-unused-vars": ["off"],
    "lines-between-class-members": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": ["error", {
      ignore: ["@/"],
    }],
  },
};
