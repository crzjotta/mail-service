module.exports = {
  env: {
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePatterns: 'next' }],
  },
};
