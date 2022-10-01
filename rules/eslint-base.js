const possibleProblems = require('./eslint/possible-problems.js');
const suggestions = require('./eslint/suggestions.js');
const layoutAndFormatting = require('./eslint/layout-and-formatting.js');

module.exports = {
  ...possibleProblems,
  ...suggestions,
  ...layoutAndFormatting,
};
