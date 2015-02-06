module.exports = {

  create: function (req, res) {
    return res.view();
  },

  /**
   * ArticleController.create()
   */
  createEndpoint: function (req, res) {
    req.file('image').upload({
      adapter: require('skipper-s3'),
      key: sails.config.aws.key,
      secret: sails.config.aws.secret,
      bucket: 'viadeo-memes'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      var articleService = new sails.services.articles();
      articleService.create(filesUploaded[0].extra.Location, req.body.description, '', function(err, result){
        if(err){
          res.negotiate(err);
        }
        res.redirect('/');
      });
    });
  },
};
