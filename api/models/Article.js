module.exports = {

  // Define a custom table name
  tableName: 'user',

  // Set schema true/false for adapters that support schemaless
  schema: true,

  attributes: {

    author : {
      model: 'User'
    },

    image: {
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
      collection: 'Comment'
    }

  }
};
