const mongoose = require('mongoose');
const User = require('./User');
const Post = mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  photourl: {type: String, required: true},
  timestamp: {type: Date, required: true},
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  comments: [
      {
        username: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        comment: {type: String}
      }
    ],
  description: {type: String, required: false},
  filter: {type: String, required: false}
});
module.exports = mongoose.model('Post', Post);
