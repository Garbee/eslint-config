const coreRules = require('./rules/stylelint/core.js');

module.exports = {
  reportNeedlessDisables: true,
  rules: {
    ...coreRules,
  },
};
