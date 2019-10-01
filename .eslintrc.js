module.exports = {
  env: {
      browser: true,
      es6: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':
      ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': [0, 'always'],
    'react/static-property-placement': 'off',
  }
};
