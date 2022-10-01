const baseConfig = require('./index.js');

module.exports = {
  ...baseConfig,
  'plugins': [...baseConfig.plugins],
  'extends': [
    ...baseConfig.extends,
    'plugin:security/recommended',
  ],
  'rules': {...baseConfig.rules},
};
