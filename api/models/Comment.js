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
      type: 'stirng',
      required: true,
      maxLength: 300
    },

    author : {
      model: 'User'
    }

  }
};
