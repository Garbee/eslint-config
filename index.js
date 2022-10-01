'use strict';

const baseRules = require('./rules/eslint-base.js');
const commentRules = require('./rules/eslint-comments.js');
const unicornRules = require('./rules/unicorn.js');

module.exports = {
  plugins: [
    'eslint-comments',
    'unicorn',
  ],
  rules: {
    ...baseRules,
    ...commentRules,
    ...unicornRules,
  },
};
