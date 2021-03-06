module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'flowtype',
    'jest',
    'cypress',
    'prettier',
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/destructuring-assignment': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    quotes: 'off',
    'no-console': 'warn',
    semi: 'off',
    'no-unused-vars': 'warn', // ['error', 'always'],
    'react/no-unused-state': 'warn',
    'no-inline-comments': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'warn',
    'no-restricted-globals': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'init-declarations': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'react/prefer-stateless-function': 'warn',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'jest/valid-expect': 0,
        'no-unused-expressions': 0,
        'no-focused-tests': 0,
      },
    },
  ],
};
