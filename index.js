const arrayFunctionRules = require('./rules/eslint/array-func.js');
const baseRules = require('./rules/eslint/eslint-base.js');
const commentRules = require('./rules/eslint/eslint-comments.js');
const importRules = require('./rules/eslint/import.js');
const {error} = require('./rules/eslint/options.js');
const promiseRules = require('./rules/eslint/promise.js');
const sonarRules = require('./rules/eslint/sonar.js');
const sortClassMembersRules = require('./rules/eslint/sort-class-members.js');
const unicornRules = require('./rules/eslint/unicorn.js');

module.exports = {
  plugins: [
    'eslint-comments',
    'unicorn',
    'anti-trojan-source',
    '@shopify/eslint-plugin',
    'no-constructor-bind',
    'array-func',
    'promise',
    'sonarjs',
    'import',
    'sort-class-members',
  ],
  rules: {
    ...baseRules,
    ...commentRules,
    ...unicornRules,
    ...arrayFunctionRules,
    ...promiseRules,
    ...sonarRules,
    ...importRules,
    ...sortClassMembersRules,
    'anti-trojan-source/no-bidi': error,
    '@shopify/prefer-early-return': error,
    'no-constructor-bind/no-constructor-bind': error,
    'no-constructor-bind/no-constructor-state': error,
  },
};
