const mongoose = require('mongoose');
const Post = require('./Post');
const User = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    contact:{type: String, require: true},
    password:{type: String, require:true},
    profilepic:{type: String, default:'https://scontent-fra3-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'},
    bio: {type: String, require: false},
    website: {type: String, require: false},
    gender:{type: String, enum:['f', 'm', 'unspecified'], default:'unspecified'},
    notifications:[
        {
          user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
          notification: {type: String},
          post: {type: String},
          time: {type: Date} 
        }
      ],
    following: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}]
});

module.exports = mongoose.model('User', User);
