const {
  error,
  warn,
  off,
} = require('../options.js');

module.exports = {
  'array-callback-return': [
    error,
    {
      checkForEach: true,
    },
  ],
  'constructor-super': off,
  'for-direction': warn,
  'getter-return': error,
  'no-async-promise-executor': error,
  'no-await-in-loop': warn,
  'no-class-assign': error,
  'no-compare-neg-zero': error,
  'no-cond-assign': off,
  'no-const-assign': error,
  'no-constant-binary-expression': error,
  'no-constant-condition': error,
  'no-constructor-return': error,
  'no-control-regex': error,
  'no-debugger': error,
  'no-dupe-args': error,
  'no-dupe-class-members': error,
  'no-dupe-else-if': error,
  'no-dupe-keys': error,
  'no-duplicate-case': error,
  'no-duplicate-imports': error,
  'no-empty-character-class': error,
  'no-empty-pattern': error,
  'no-ex-assign': error,
  'no-fallthrough': error,
  'no-func-assign': error,
  'no-import-assign': error,
  'no-inner-declarations': error,
  'no-invalid-regexp': error,
  'no-irregular-whitespace': error,
  'no-loss-of-precision': error,
  'no-misleading-character-class': error,
  'no-new-symbol': error,
  'no-obj-calls': error,
  'no-promise-executor-return': error,
  'no-prototype-builtins': error,
  'no-self-assign': error,
  'no-self-compare': error,
  'no-setter-return': error,
  'no-sparse-arrays': error,
  'no-template-curly-in-string': off,
  'no-this-before-super': error,
  'no-undef': error,
  'no-unexpected-multiline': error,
  'no-unmodified-loop-condition': error,
  'no-unreachable': error,
  'no-unreachable-loop': error,
  'no-unsafe-finally': error,
  'no-unsafe-negation': error,
  'no-unsafe-optional-chaining': error,
  'no-unused-private-class-members': error,
  'no-unused-vars': error,
  'no-use-before-define': error,
  'no-useless-backreference': error,
  'require-atomic-updates': error,
  'use-isnan': error,
  'valid-typeof': error,
};
