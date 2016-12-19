const mongoose = require('mongoose');
const User = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    contact:{type: String, require: true},
    password:{type: String, require:true},
    profilepic:{type: String, require:false},
    notifications:{type: Array, require: false},
});

module.exports = mongoose.model('User', User);
