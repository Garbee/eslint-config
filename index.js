const {error} = require('./rules/options.js');
const baseRules = require('./rules/eslint-base.js');
const commentRules = require('./rules/eslint-comments.js');
const unicornRules = require('./rules/unicorn.js');
const arrayFunctionRules = require('./rules/array-func.js');

module.exports = {
  plugins: [
    'eslint-comments',
    'unicorn',
    'anti-trojan-source',
    '@shopify/eslint-plugin',
    'no-constructor-bind',
    'array-func',
  ],
  rules: {
    ...baseRules,
    ...commentRules,
    ...unicornRules,
    ...arrayFunctionRules,
    'anti-trojan-source/no-bidi': error,
    '@shopify/prefer-early-return': error,
    'no-constructor-bind/no-constructor-bind': error,
    'no-constructor-bind/no-constructor-state': error,
  },
};
