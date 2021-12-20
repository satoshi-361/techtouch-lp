module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: [
    'plugin:prettier/recommended',
    'typescript',
    'plugin:vue/recommended'
  ],
  settings: {
    'import/core-modules': ['vue']
  },
  rules: {
    semi: [2, 'never'],
    'typescript/member-delimiter-style': 'off',
    'typescript/no-var-requires': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ]
  }
}
