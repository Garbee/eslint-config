const {error, off} = require('./options.js');

module.exports = {
  // Static Analysis
  'import/no-unresolved': error,
  'import/named': error,
  'import/default': error,
  'import/namespace': error,
  'import/no-restricted-paths': off,
  'import/no-absolute-path': error,
  'import/no-dynamic-require': error,
  'import/no-internal-modules': off,
  'import/no-webpack-loader-syntax': error,
  'import/no-self-import': error,
  'import/no-cycle': error,
  'import/no-useless-path-segments': error,
  'import/no-relative-parent-imports': error,
  'import/no-relative-packages': error,

  // Helpful Warnings
  'import/export': error,
  'import/no-named-as-default': error,
  'import/no-named-as-default-member': error,
  'import/no-deprecated': error,
  'import/no-extraneous-dependencies': error,
  'import/no-mutable-exports': error,
  'import/no-unused-modules': error,

  // Module Systems
  'import/unambiguous': error,
  'import/no-commonjs': off,
  'import/no-amd': error,
  'import/no-nodejs-modules': off,
  'import/no-import-module-exports': off,

  // Style
  'import/first': error,
  'import/exports-last': error,
  'import/no-duplicates': error,
  'import/no-namespace': error,
  'import/extensions': [
    error,
    'always',
    {
      ignorePackages: true,
    },
  ],
  'import/order': [
    error,
    {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/newline-after-import': error,
  'import/prefer-default-export': off,
  'import/max-dependencies': [
    error,
    {
      max: 10,
      ignoreTypeImports: true,
    },
  ],
  'import/no-unassigned-import': error,
  'import/no-named-default': error,
  'import/no-default-export': [error],
  'import/no-named-export': off,
  'import/no-anonymous-default-export': off,
  'import/group-exports': [error],
  'import/dynamic-import-chunkname': off,
};
