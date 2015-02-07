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

    email : {
      type: 'email',
      required: true,
      unique: true
    },

    userName : {
      type: 'string',
      unique: true
    },

    photo_url : {
      type: 'string'
    }

  },


  beforeCreate: function (user, next) {
    // generare uid
    user.uid = uuid.v4();
    next(null, user);
  }


};
