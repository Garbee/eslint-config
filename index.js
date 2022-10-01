'use strict';

const baseRules = require('./rules/eslint-base.js');
const commentRules = require('./rules/eslint-comments.js');

module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    ...baseRules,
    ...commentRules,
  },
};
