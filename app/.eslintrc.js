module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
  },
};
