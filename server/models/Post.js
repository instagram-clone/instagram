const mongoose = require('mongoose');
const Post = mongoose.Schema({
  author: {type: String, required: true},
  photourl: {type: String, required: true},
  timestamp: {type: Date, required: true},
  likes: {type: Array, required: false},
  comments: {type: Array, required: false},
});
module.exports = mongoose.model('Post', Post);
