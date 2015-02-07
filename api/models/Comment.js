var uuid = require('uuid');

module.exports = {

  // Set schema true/false for adapters that support schemaless
  schema: true,
  autoPK: false,

  attributes: {

    uid: {
      type: 'string',
      required: true,
      primaryKey: true
    },

    text : {
      type: 'string',
      required: true,
      maxLength: 300
    },

    author : {
      model: 'User'
    }

  },

  beforeCreate: function (comment, next) {
    // generare uid
    comment.uid = uuid.v4();
    next(null, comment);
  }

};
