const {error, off} = require('../options.js');

module.exports = {
  'accessor-pairs': off,
  'arrow-body-style': [
    error,
    'always',
  ],
  'block-scoped-var': error,
  'camelcase': [
    error,
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
    },
  ],
  'capitalized-comments': error,
  'class-methods-use-this': off,
  'complexity': [
    error,
    {
      max: 15,
    },
  ],
  'consistent-return': error,
  'consistent-this': error,
  'curly': [
    error,
    'all',
  ],
  'default-case': error,
  'default-case-last': error,
  'default-param-last': error,
  'dot-notation': error,
  'eqeqeq': [
    error,
    'smart',
  ],
  'func-name-matching': error,
  'func-names': [
    error,
    'always',
  ],
  'func-style': [
    error,
    'expression',
    {
      allowArrowFunctions: true,
    },
  ],
  'grouped-accessor-pairs': [
    error,
    'setBeforeGet',
  ],
  'guard-for-in': error,
  'id-denylist': off,
  'id-length': off,
  'id-match': off,
  'init-declarations': [
    error,
    'always',
  ],
  'logical-assignment-operators': [
    error,
    'always',
    {
      enforceForIfStatements: true,
    },
  ],
  'max-classes-per-file': [
    error,
    {
      ignoreExpressions: true,
      max: 1,
    },
  ],
  'max-depth': [
    error,
    {
      max: 3,
    },
  ],
  'max-lines': off,
  'max-lines-per-function': [
    error,
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],
  'max-nested-callbacks': [
    error,
    {
      max: 4,
    },
  ],
  'max-params': [
    error,
    {
      max: 3,
    },
  ],
  'max-statements': off,
  'multiline-comment-style': [
    error,
    'starred-block',
  ],
  'new-cap': off,
  'no-alert': error,
  'no-array-constructor': error,
  'no-bitwise': error,
  'no-caller': error,
  'no-case-declarations': error,
  'no-confusing-arrow': error,
  'no-console': error,
  'no-continue': error,
  'no-delete-var': error,
  'no-div-regex': error,
  'no-else-return': error,
  'no-empty': error,
  'no-empty-function': error,
  'no-eq-null': off,
  'no-eval': error,
  'no-extend-native': error,
  'no-extra-bind': error,
  'no-extra-boolean-cast': [
    error,
    {
      enforceForLogicalOperands: true,
    },
  ],
  'no-extra-label': error,
  'no-extra-semi': error,
  'no-floating-decimal': error,
  'no-global-assign': error,
  'no-implicit-coercion': [
    error,
    {
      'boolean': true,
      'number': true,
      'string': true,
      'disallowTemplateShorthand': true,
    },
  ],
  'no-implicit-globals': error,
  'no-implied-eval': error,
  'no-inline-comments': off,
  'no-invalid-this': error,
  'no-iterator': error,
  'no-label-var': error,
  'no-labels': [
    error,
    {
      allowLoop: true,
      allowSwitch: true,
    },
  ],
  'no-lone-blocks': error,
  'no-lonely-if': error,
  'no-loop-func': error,
  'no-magic-numbers': [
    error,
    {
      ignore: [
        -1,
        0,
        1,
      ],
      ignoreDefaultValues: true,
      enforceConst: false,
      detectObjects: true,
    },
  ],
  'no-mixed-operators': error,
  'no-multi-assign': error,
  'no-multi-str': error,
  'no-negated-condition': error,
  'no-nested-ternary': error,
  'no-new': error,
  'no-new-func': error,
  'no-new-object': error,
  'no-new-wrappers': error,
  'no-nonoctal-decimal-escape': error,
  'no-octal': error,
  'no-octal-escape': error,
  'no-param-reassign': error,
  'no-plusplus': error,
  'no-proto': error,
  'no-redeclare': error,
  'no-regex-spaces': error,
  'no-restricted-exports': off,
  'no-restricted-globals': off,
  'no-restricted-imports': off,
  'no-restricted-properties': off,
  'no-restricted-syntax': off,
  'no-return-assign': error,
  'no-return-await': error,
  'no-script-url': error,
  'no-sequences': error,
  'no-shadow': error,
  'no-shadow-restricted-names': error,
  'no-ternary': off,
  'no-throw-literal': error,
  'no-undef-init': error,
  'no-undefined': off,
  'no-underscore-dangle': error,
  'no-unneeded-ternary': error,
  'no-unused-expressions': error,
  'no-unused-labels': error,
  'no-useless-call': error,
  'no-useless-catch': error,
  'no-useless-computed-key': error,
  'no-useless-concat': error,
  'no-useless-constructor': error,
  'no-useless-escape': error,
  'no-useless-rename': error,
  'no-useless-return': error,
  'no-var': error,
  'no-void': off,
  'no-warning-comments': off,
  'no-with': error,
  'object-shorthand': error,
  'one-var': off,
  'one-var-declaration-per-line': off,
  'operator-assignment': [
    error,
    'never',
  ],
  'prefer-arrow-callback': off,
  'prefer-const': error,
  'prefer-destructuring': error,
  'prefer-exponentiation-operator': error,
  'prefer-named-capture-group': error,
  'prefer-numeric-literals': off,
  'prefer-object-has-own': error,
  'prefer-object-spread': error,
  'prefer-promise-reject-errors': error,
  'prefer-regex-literals': off,
  'prefer-rest-params': error,
  'prefer-spread': error,
  'prefer-template': error,
  'quote-props': [
    error,
    'consistent-as-needed',
    {
      keywords: true,
    },
  ],
  'radix': [
    error,
    'always',
  ],
  'require-await': error,
  'require-unicode-regexp': error,
  'require-yield': error,
  'sort-imports': off,
  'sort-keys': off,
  'sort-vars': off,
  'spaced-comment': [
    error,
    'always',
  ],
  'strict': off,
  'symbol-description': error,
  'vars-on-top': error,
  'yoda': off,
};