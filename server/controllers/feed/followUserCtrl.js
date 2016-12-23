const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {

  followUser: function(req, res, next){
    if(req.params.username){
    User.findOne({username: req.body.username}, (err, followedOne) =>{ 
      User.findOneAndUpdate({username: req.params.username }, {$addToSet: {following: followedOne._id}}, {new: true})
        .populate('following')
        .exec((err, user) => {
          if(err) {
            console.log('follow user error');
            return res.status(500).json(err);
          }
          console.log('follow user success?');
          return res.status(200).json(user);
        })
    });

      }
  },
  addFollower: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.params.username}, (err, follower) =>{
        User.findOneAndUpdate({username: req.body.username}, {$addToSet: {followers: follower._id}}, {new: true})
          .populate('followers')
          .exec((err, user)=>{
            if(err){
              return res.status(500).json(err);
            }
              console.log('add follower worked?');
              return res.status(200).json(user);
          })
      })
    }
  }
};
