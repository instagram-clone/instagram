const User = require('../../models/User');

module.exports = {
  readProfileInfo: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.params.username})
        .populate('notifications.user')
        .populate('following')
        .populate('followers')
        .exec((err, user) => {
          if(err) return res.status(500).json(err);
          return res.status(200).json(user);
        })
    }
  }


}
