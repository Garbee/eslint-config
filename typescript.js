const {error} = require('./rules/options.js');
const baseConfig = require('./index.js');

module.exports = {
  'parser': '@typescript-eslint/parser',
  ...baseConfig,
  'plugins': [
    ...baseConfig.plugins,
    '@typescript-eslint',
  ],
  'extends': [...baseConfig.extends],
  'rules': {
    ...baseConfig.rules,
    'sonarjs/no-ignored-return': error,
  },
};
