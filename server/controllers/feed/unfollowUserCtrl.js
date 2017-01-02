const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {

  unfollowUser: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.body.username}, (err, unfollowedOne) =>{
        User.findOneAndUpdate({username: req.params.username}, {$pull: {following: unfollowedOne._id}}, {new: true})
          .populate('following')
          .exec((err, user) => {
            if(err) {
              console.log('unfollow user error');
              return res.status(500).json(err);
            }
            console.log('unfollow user success?');
            return res.status(200).json(user);
          })
      });
    }
  },

  removeFollower: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.params.username}, (err, unfollower) =>{
        User.findOneAndUpdate({username: req.body.username}, {$pull: {followers: unfollower._id}}, {new: true})
          .populate('followers')
          .exec((err, user) =>{
            if(err){
              return res.status(500).json(err);
            }
              console.log('remove follower worked?');
              return res.status(200).json(user);
          })
      });
    }
  }



}
