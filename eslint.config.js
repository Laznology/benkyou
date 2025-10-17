import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "astro/config";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["/node_modules/**", "/dist/**"],
    rules: {
      /**
       * Override config here
       * astro/no-set-html-directive": "error"
       */
    },
  },
];
