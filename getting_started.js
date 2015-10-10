var _ = require("lodash");

var worker = function(collection) {
  var output = _.where(collection, { active: true });
  return output;
};

module.exports = worker