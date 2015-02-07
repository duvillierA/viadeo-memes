/**
 * GameController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var url = require('url'),
  moment = require('moment'),
  _ = require('lodash');

module.exports = {
  index: function (req, res) {

    var ArticlesService = new sails.services.articles();
    ArticlesService.getAll(function(err, results){
      return res.view({
        articles: ArticlesService.addTimestamp(results)
      });
    });
  }
};
