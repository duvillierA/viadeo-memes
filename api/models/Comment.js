module.exports = {

  // Set schema true/false for adapters that support schemaless
  schema: true,

  attributes: {

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
