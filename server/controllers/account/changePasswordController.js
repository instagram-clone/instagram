const User = require('../../models/User');

module.exports = {
    postPassword: function(req, res, next){
      console.log(req.body);
      User.findByIdAndUpdate(req.body.id, {$set: {password: req.body.password}}, {new: true}, (err, user) => {
        console.log(err);
        if(err){
          return res.status(500).json(err);
        } return res.status(200).json(user);
      })
    }
}
// User.findOne({field: value}, {gender: 1}, (err, user) => {
//
// })
//
// User.findOneAndUpdate({field: value}, {$set: {field: value}}, {username: 1}, {new: true}, (err, user) => {
//
// })
