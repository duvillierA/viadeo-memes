/**
 * GameController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var url = require('url');

module.exports = {
  index: function (req, res) {

    var ArticlesService = new sails.services.articles();

    ArticlesService.getAll(function(err, results){
      sails.log.info('display articles', results);
      return res.view({
        articles: results
      });
    });
  }
};
