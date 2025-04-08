import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { js },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
    extends: ['eslint:recommended'],
  },
]);
