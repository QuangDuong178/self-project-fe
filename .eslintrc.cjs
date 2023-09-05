/* eslint-env node */

module.exports = {
  root: true,
  extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'prettier',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier/skip-formatting',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        arrowParens: 'avoid',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        vueIndentScriptAndStyle: false,
        printWidth: 120,
        bracketSpacing: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-extra-boolean-cast': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
