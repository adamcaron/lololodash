var _ = require("lodash");

var worker = function(towns) {
  var sorted_towns = {
     hot: [],
    warm: []
  };

  function hot_town(town) {
    return _.every(town, function(temp) {
      return temp > 19;
    });
  };

  function warm_town(town) {
    return _.some(town, function(temp) {
      return temp > 19;
    });
  };

  _.forEach(towns, function(town, townname) {

    if (hot_town(town)) {
      sorted_towns.hot.push(townname);
    } else if (warm_town(town)) {
      sorted_towns.warm.push(townname);
    };

  });

  return sorted_towns;

};

module.exports = worker;