module.exports = {

  create: function (req, res) {
    return res.view();
  },

  /**
   * ArticleController.create()
   */
  createEndpoint: function (req, res) {

    var articleService = new sails.services.articles(),
      category = req.body.category,
      userId = req.body.anonymous==='on' ? '' : req.user.uid;

      sails.log.warn(req.body, typeof(req.body));

    req.file('image').upload({
      adapter: require('skipper-s3'),
      key: sails.config.aws.key,
      secret: sails.config.aws.secret,
      bucket: 'viadeo-memes'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      articleService.create(filesUploaded[0].extra.Location, req.body.description, userId, category, function(err, result){
        if(err){
          res.negotiate(err);
        }
        res.redirect('/');
      });
    });
  },
};
