const User = require('../../models/User');

module.exports = {
  readProfileInfo: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.params.username}, (err, user) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(user);
      })
    }
  }
}
