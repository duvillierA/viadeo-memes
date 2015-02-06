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

    email : {
      type: 'email',
      required: true,
      unique: true
    },

    username : {
      model: 'User',
      unique: true
    }

  },


  beforeCreate: function (user, next) {
    // generare uid
    user.uid = uuid.v4();
    next(null, user);
  }


};
