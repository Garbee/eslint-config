const {off, error} = require('./options');

module.exports = {
  // Bug Detection
  'sonarjs/no-all-duplicated-branches': error,
  'sonarjs/no-element-overwrite': error,
  'sonarjs/no-empty-collection': error,
  'sonarjs/no-extra-arguments': error,
  'sonarjs/no-identical-conditions': error,
  'sonarjs/no-identical-expressions': error,
  'sonarjs/no-one-iteration-loop': error,
  'sonarjs/no-use-of-empty-return-value': error,
  'sonarjs/non-existent-operator': error,

  // Code Smell Detection

  // Handled by eslint core rule 'complexity'
  'sonarjs/cognitive-complexity': off,
  'sonarjs/elseif-without-else': error,
  'sonarjs/max-switch-cases': [
    error,
    10,
  ],
  'sonarjs/no-collapsible-if': error,
  'sonarjs/no-collection-size-mischeck': error,
  'sonarjs/no-duplicate-string': error,
  'sonarjs/no-duplicated-branches': error,
  'sonarjs/no-gratuitous-expressions': error,
  'sonarjs/no-identical-functions': error,

  // Handled by eslint core rules
  'sonarjs/no-inverted-boolean-check': off,
  'sonarjs/no-nested-switch': error,
  'sonarjs/no-nested-template-literals': error,
  'sonarjs/no-redundant-boolean': off,
  'sonarjs/no-redundant-jump': error,
  'sonarjs/no-same-line-conditional': error,
  'sonarjs/no-small-switch': error,
  'sonarjs/no-unused-collection': error,
  'sonarjs/no-useless-catch': error,
  'sonarjs/prefer-immediate-return': error,
  'sonarjs/prefer-object-literal': error,
  'sonarjs/prefer-single-boolean-return': error,
  'sonarjs/prefer-while': error,
};
