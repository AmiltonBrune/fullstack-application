module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'styled-components'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'styled-components/configuration': [
      'error',
      {
        displayName: true,
        fileName: false,
      },
    ],
    'styled-components/sort-comp': 'error',
    'styled-components/consistent-css-props': 'error',
  },
};
