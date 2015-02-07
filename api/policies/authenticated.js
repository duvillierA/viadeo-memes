/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function (req, res, next) {

  var loginRoute = '/login';

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  // temp allow *

  if (req.user || req.path === loginRoute) {
    return next();
  };

  req.flash('back', req.path);
  req.flash_alert('Error.Passport.auth.forbidden');
  return res.redirect('/login');
};
