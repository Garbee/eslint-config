const {
  error, off,
} = require('./options.js');

module.exports = {
  'promise/always-return': error,
  'promise/no-return-wrap': error,
  'promise/param-names': error,
  'promise/catch-or-return': error,
  'promise/no-native': off,
  'promise/no-nesting': error,
  'promise/no-promise-in-callback': error,
  'promise/no-callback-in-promise': off,
  'promise/avoid-new': off,
  'promise/no-new-statics': error,
  'promise/no-return-in-finally': error,
  'promise/valid-params': error,
};
