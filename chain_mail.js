var _ = require("lodash");

var worker = function (words) {
  return _.chain(words)
    .map(function(word) {
      var appended_word = word + 'chained'
      return appended_word.toUpperCase()
    })
    .sort()
};

module.exports = worker;