module.exports = {

  /**
   * ArticleController.create()
   */
  createEndpoint: function (req, res) {
    req.file('article').upload({
      adapter: require('skipper-s3'),
      key: 'S3 Key',
      secret: 'S3 Secret',
      bucket: 'Bucket Name'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      return res.ok({
        files: uploadedFiles,
        textParams: req.params.all()
      });
    });
  },

  /**
   * ArticleController.destroy()
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  /**
   * ArticleController.like()
   */
  like: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  }
};
