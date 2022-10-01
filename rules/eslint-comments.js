const {error} = require('./options.js');

module.exports = {
  'eslint-comments/disable-enable-pair': [
    error,
    {
      allowWholeFile: true,
    },
  ],
  'eslint-comments/no-aggregating-enable': error,
  'eslint-comments/no-duplicate-disable': error,
  'eslint-comments/no-unlimited-disable': error,
  'eslint-comments/no-unused-disable': error,
  'eslint-comments/no-unused-enable': error,
  'eslint-comments/require-description': [
    error,
    {
      ignore: [
        'global',
        'globals',
        'exported',
      ],
    },
  ],
};
