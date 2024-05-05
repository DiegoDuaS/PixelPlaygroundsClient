module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.jsx'], 
      extends: [
        'plugin:react/recommended', 
      ],
      settings: {
        react: {
          version: 'detect', 
        },
      },
      env: {
        browser: true,
        node: false,
      },
    },
  ],
  rules: {
    "semi": 0,
    "import/extensions": "off",
    "camelcase": "off",
    "prefer-destructuring": "off",
  },
};


