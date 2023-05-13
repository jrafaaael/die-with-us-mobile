module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin", "react-native"],
  root: true,
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "function-declaration" },
    ],
    "react/hook-use-state": [1, { allowDestructuredState: false }],
    "react/jsx-no-leaked-render": [
      2,
      { validStrategies: ["ternary", "coerce"] },
    ],
    "react/jsx-pascal-case": [
      1,
      {
        allowAllCaps: false,
        allowNamespace: true,
        allowLeadingUnderscore: true,
      },
    ],
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-raw-text": 1,
    "react-native/no-single-element-style-arrays": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
