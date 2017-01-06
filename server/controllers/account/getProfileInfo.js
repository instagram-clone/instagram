const User = require('../../models/User');
const Post = require('../../models/Post');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
  },
  getPostCount: function(req, res, next){
    if(req.params.id){
      Post.find({author: req.params.id})
        .populate('author')
        .populate('likes')
        .populate('comments.user')
        .exec((err, posts) =>{
          if(err) return res.status(500).json(err);
          return res.status(200).json(posts);
        })
    }
  },
  getProfiles: function(req, res, next){
    console.log("USER!: ", req.params.user)
    User.findById(req.params.user)
      .select({
        username: 1,
        fullname: 1,
        profilepic: 1,
          })
      .exec((err, profiles) =>{
        console.log("ERROR: ", err)
        if(err) return res.status(500).json(err);
        return res.status(200).json(profiles);
      })
    
  }


}
