var _ = require("lodash");

var worker = function(comments) {

  // Group by username
  comments = _.groupBy(comments, 'username');

  return _.map(comments, function (user_with_comments, user) {
    var count = _.size(user_with_comments);

    return { "username": user, "comment_count": count };
  }).reverse();
};

module.exports = worker;

