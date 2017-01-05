const app = require('../../index.js');
const Post = require('../../models/Post');
const User = require('../../models/User');

module.exports = {
    postComment: function(req, res, next){
        Post.findByIdAndUpdate({_id: req.body.photoid},
                    {$addToSet: { comments : {
                        username: req.body.username,
                        userid: req.body.userid,
                        comment: req.body.comment
                    }}}, (err, post) => {
                        if(err) return res.status(500).json(err);
                        console.log("Post Author: ", post);
                        User.findByIdAndUpdate(
                            post.author,
                            {$push: {notifications: {user: req.body.userid, notification: 'commented: ' + req.body.comment}}}, 
                            {new: true},
                            (err, notifications) => {
                        console.log("Error: ", err)
                        console.log("Notification", notifications)
                        return res.status(200).json(post);
                    }
                )
        });
    }
}
