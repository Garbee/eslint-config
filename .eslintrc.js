module.exports = {
  'root': true,
  'env': {
    node: true,
    es2022: true,
  },
  'extends': ['./index.js'],
  'rules': {
    // Ignore magic numbers for the configuration itself.
    'no-magic-numbers': 'off',
  },
};
