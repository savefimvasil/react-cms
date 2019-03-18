const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  titleUA: {
    type: String
  },
  titleRU: {
    type: String
  },
  img: {
    type: String
  },
  postBodyUA: {
    type: String
  },
  postBodyRU: {
    type: String
  },
  postBodyMiniUA: {
    type: String
  },
  postBodyMiniRU: {
    type: String
  },
  date: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);
