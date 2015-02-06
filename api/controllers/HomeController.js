/**
 * GameController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var url = require('url');

module.exports = {
  index: function (req, res) {
    return res.view();
  }
};
