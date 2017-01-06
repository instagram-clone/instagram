const app = require('../../index.js');
const Post = require('../../models/Post');
const User = require('../../models/User');

module.exports = {
    favorite: function(req, res, next){
        console.log(req.body);
        Post.findByIdAndUpdate(req.body.photoID,
            {$addToSet: { likes : req.body.userID }},
            {new: true},
            (err, post) => {
                if(err) return res.status(500).json(err);
                console.log("Post Author: ", post)
                User.findByIdAndUpdate(
                    post.author,
                    {$push: {notifications: {user: req.body.userID, notification: 'liked your photo', post: post.photourl, time: new Date()}}}, 
                    {new: true},
                    (err, notifications) => {
                        console.log("Error: ", err)
                        console.log("Notification", notifications)
                        return res.status(200).json(post);
                    }
                )  
            });
  
    },
    unfavorite: function(req, res, next){
        console.log(req.body);
        Post.update(
            {_id: req.body.photoID},
            {$pull : {likes : req.body.userID}},
            (err, post) => {
                if(err) return res.status(500).json(err);
                return res.status(200).json(post);
            }
        )
    }
}
