var app = require('../../index.js');
const User = require('../../models/User');

module.exports = {
    signup: function(req, res, next){
        console.log('stepping in')
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(user);
        })
    },
};
