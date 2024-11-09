import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    ignores: ["node_modules/**"], // Ensures `node_modules` is ignored globally
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
  {
    files: ["**/*.ts"],
    ...tseslint.configs.recommended,
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    ...pluginVue.configs["flat/essential"],
  },
];
