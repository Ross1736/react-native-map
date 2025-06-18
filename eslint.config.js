// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [".expo", "node_modules"],
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // TypeScript rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-key": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-empty-interface": "warn",
      "no-unused-vars": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      semi: ["error", "always"],
      quotes: ["warn", "double"],
      indent: ["warn", 2],
      // Prettier rules
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          singleQuote: false,
          tabWidth: 2,
        },
      ],
    },
  },
  {
    ignores: ["dist/*"],
  },
]);
