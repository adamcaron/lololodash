var _ = require("lodash");

var worker = function(cities) {
  _.forEach(cities, function(city) {
    if (city.population >= 1) {
      city.size = 'big';
    } else if (city.population < 1 && city.population >= 0.5) {
      city.size = 'med';
    } else {
      city.size = 'small';
    };
  });
  return cities
};

module.exports = worker;