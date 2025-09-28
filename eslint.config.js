import autoImports from "./.wxt/eslint-auto-imports.mjs";
import eslintConfig from "@eslint/js";
export default [
  {
    ignores: [
      "**/__tests__/**/*.html",
      "src/public/**",
      "**/generated/**",
      ".output/**",
      ".wxt/**",
    ],
  },
  autoImports,
  eslintConfig.configs.recommended,
];
