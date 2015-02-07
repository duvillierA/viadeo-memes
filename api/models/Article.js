var uuid = require('uuid');

module.exports = {

  // Set schema true/false for adapters that support schemaless
  schema: true,
  autoPK: false,

  attributes: {

    uid: {
      type: 'string',
      unique: true,
      primaryKey: true
    },

    author : {
      model: 'User'
    },

    image_url: {
      type: 'string',
      defaultsTo: '',
      required: true
    },

    description: {
      type: 'string',
      defaultsTo: '',
      required: true
    },

    comments: {
      collection: 'Comment',
      // via: 'author'
    }

  },

  beforeCreate: function (article, next) {
    // generare uid
    article.uid = uuid.v4();
    next(null, article);
  }
};
