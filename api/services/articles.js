var _ = require('lodash');

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

module.exports = Articles;
