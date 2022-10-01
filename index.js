'use strict';

const baseRules = require('./rules/eslint-base.js');
const commentRules = require('./rules/eslint-comments.js');
const {error} = require('./rules/options.js');
const unicornRules = require('./rules/unicorn.js');

module.exports = {
  plugins: [
    'eslint-comments',
    'unicorn',
    'anti-trojan-source',
    'shopify',
  ],
  rules: {
    ...baseRules,
    ...commentRules,
    ...unicornRules,
    'anti-trojan-source/no-bidi': error,
    'shopify/prefer-early-return': error,
  },
};
