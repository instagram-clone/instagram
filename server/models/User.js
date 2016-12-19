const mongoose = require('mongoose');
const User = mongoose.Schema({
    fullname: {type: String, required: true},
    username: {type: String, required: true},
    email:{type: String, require: true},
    password:{type: String, require:true},
    profilepic:{type: String, require:false},
    notifications:{type: Array, require: false},
});

module.exports = mongoose.model('User', User);
