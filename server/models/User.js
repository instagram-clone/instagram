const mongoose = require('mongoose');
const User = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    contact:{type: String, require: true},
    password:{type: String, require:true},
    profilepic:{type: String, require:false},
    bio: {type: String, require: false},
    website: {type: String, require: false},
    gender:{type: String, enum:['f', 'm', 'unspecified'], default:'unspecified'},
    notifications:[
        {
          user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
          notification: {type: String}
        }
      ],
    following: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}]
});

module.exports = mongoose.model('User', User);
