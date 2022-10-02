const {error} = require('./options.js');

module.exports = {
  'sort-class-members/sort-class-members': [
    error,
    {
      order: [
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[conventional-private-properties]',
        '[arrow-function-properties]',
        '[accessor-pairs]',
        '[getters]',
        '[setters]',
        'constructor',
        '[methods]',
        '[conventional-private-methods]',
        '[everything-else]',
      ],
      accessorPairPositioning: 'getThenSet',
      locale: 'en-US',
    },
  ],
};
