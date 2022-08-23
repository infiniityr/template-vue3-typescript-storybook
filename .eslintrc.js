module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    'plugin:storybook/recommended',
    'plugin:markdown/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
