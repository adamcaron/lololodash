var _ = require("lodash");

var worker = function(collection) {
  var output = _.where(collection, { active: true });
  return output;
};

module.exports = worker

// ## Your Mission

// We have a array of Javascript Objects representing some users in the following format:

//     [
//         { id: 22, username: "martin", active: true},
//         { id: 23, username: "max",    active: false},
//         { id: 24, username: "linda",  active: false}
//     ]

// Please write a function that takes such a list as its first argument and give back only
// the active users (active === true).