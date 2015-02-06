module.exports = {

  // Set schema true/false for adapters that support schemaless
  schema: true,

  attributes: {

    email : {
      type: 'email',
      required: true,
      unique: true
    },

    username : {
      model: 'User',
      unique: true
    }

  }
};
