const {error, off} = require('./options.js');

const objectCurlyNewlineConfig = {
  multiline: true,
  minProperties: 3,
  consistent: true,
};

module.exports = {
  'array-bracket-newline': [
    error,
    {
      multiline: true,
      minItems: 2,
    },
  ],
  'array-bracket-spacing': [
    error,
    'never',
  ],
  'array-element-newline': [
    error,
    {
      multiline: true,
      minItems: 2,
    },
  ],
  'arrow-parens': [
    error,
    'always',
  ],
  'arrow-spacing': error,
  'block-spacing': error,
  'brace-style': [
    error,
    '1tbs',
    {
      allowSingleLine: false,
    },
  ],
  'comma-dangle': [
    error,
    'always-multiline',
  ],
  'comma-spacing': error,
  'comma-style': [
    error,
    'last',
  ],
  'computed-property-spacing': [
    error,
    'never',
  ],
  'dot-location': [
    error,
    'property',
  ],
  'eol-last': [
    error,
    'always',
  ],
  'func-call-spacing': [
    error,
    'never',
  ],
  'function-call-argument-newline': [
    error,
    'consistent',
  ],
  'function-paren-newline': [
    error,
    'consistent',
  ],
  'generator-star-spacing': [
    error,
    {
      before: false,
      after: true,
    },
  ],
  'implicit-arrow-linebreak': [
    error,
    'beside',
  ],

  // From Google Styleguide
  'indent': [
    error,
    2,
    {
      CallExpression: {
        arguments: 2,
      },
      FunctionDeclaration: {
        body: 1,
        parameters: 2,
      },
      FunctionExpression: {
        body: 1,
        parameters: 2,
      },
      MemberExpression: 2,
      ObjectExpression: 1,
      SwitchCase: 1,
      ignoredNodes: ['ConditionalExpression'],
    },
  ],
  'jsx-quotes': off,
  'key-spacing': [
    error,
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],
  'keyword-spacing': [
    error,
    {
      before: true,
      after: true,
    },
  ],
  'line-comment-position': [
    error,
    'above',
  ],
  'linebreak-style': [
    error,
    'unix',
  ],
  'lines-around-comment': [
    error,
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
      applyDefaultIgnorePatterns: true,
    },
  ],
  'lines-between-class-members': [
    error,
    'always',
    {
      exceptAfterSingleLine: false,
    },
  ],
  'max-len': [
    error,
    {
      code: 80,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  'max-statements-per-line': [
    error,
    {
      max: 1,
    },
  ],
  'multiline-ternary': [
    error,
    'always-multiline',
  ],
  'new-parens': [
    error,
    'always',
  ],
  'newline-per-chained-call': [
    error,
    {
      ignoreChainWithDepth: 2,
    },
  ],
  'no-extra-parens': [
    error,
    'all',
  ],
  'no-mixed-spaces-and-tabs': error,
  'no-multi-spaces': error,
  'no-multiple-empty-lines': [
    error,
    {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    },
  ],
  'no-tabs': error,
  'no-trailing-spaces': error,
  'no-whitespace-before-property': error,
  'nonblock-statement-body-position': error,
  'object-curly-newline': [
    error,
    objectCurlyNewlineConfig,
  ],
  'object-curly-spacing': [
    error,
    'never',
  ],
  'object-property-newline': error,
  'operator-linebreak': [
    error,
    'after',
  ],
  'padded-blocks': [
    error,
    'never',
  ],
  'padding-line-between-statements': [
    error,

    // Blank line before returns
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },

    // BLack line after variable delcarations in a block
    {
      blankLine: 'always',
      prev: [
        'const',
        'let',
        'var',
      ],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: [
        'const',
        'let',
        'var',
      ],
      next: [
        'const',
        'let',
        'var',
      ],
    },
  ],
  'quotes': [
    error,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  'rest-spread-spacing': [
    error,
    'never',
  ],
  'semi': [
    error,
    'always',
  ],
  'semi-spacing': [
    error,
    {
      before: false,
      after: true,
    },
  ],
  'semi-style': [
    error,
    'last',
  ],
  'space-before-blocks': [
    error,
    'always',
  ],
  'space-before-function-paren': [
    error,
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': [
    error,
    'never',
  ],
  'space-infix-ops': error,
  'space-unary-ops': [
    error,
    {
      words: true,
      nonwords: false,
    },
  ],
  'switch-colon-spacing': [
    error,
    {
      after: true,
      before: false,
    },
  ],
  'template-curly-spacing': [
    error,
    'never',
  ],
  'template-tag-spacing': [
    error,
    'never',
  ],
  'unicode-bom': [
    error,
    'never',
  ],
  'wrap-iife': [
    error,
    'outside',
  ],
  'wrap-regex': error,
  'yield-star-spacing': [
    error,
    {
      before: false,
      after: true,
    },
  ],
};
