const layoutAndFormatting = require('./layout-and-formatting.js');
const possibleProblems = require('./possible-problems.js');
const suggestions = require('./suggestions.js');

module.exports = {
  ...possibleProblems,
  ...suggestions,
  ...layoutAndFormatting,
};
