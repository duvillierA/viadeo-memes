var _ = require('lodash'),
  moment = require('moment');

function Articles() {
  // construtor
}

Articles.prototype.getAll = function (callback) {
  sails.models.article
    .find()
    .then(function (result){
      return callback(null, result);
    }).fail(callback);
};

Articles.prototype.create = function (imageUrl, description, authorId, callback) {
  sails.models.article
  .create({
    image_url: imageUrl,
    description: description
  }).then(function (){
    return  callback(null);
  }).fail(callback);
};

Articles.prototype.addTimestamp = function (articles) {
  _.forEach(articles, function (article){
    article.date = moment(article.createdAt).fromNow();
  });
  return articles;
};

module.exports = Articles;
