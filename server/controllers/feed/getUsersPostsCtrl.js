const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {

    getFeed : function(req, res, next){
        const feed = [];
        setTimeout(() => {
            return res.status(200).json(feed);
        }, 300);
        User.findOne({username: req.query.username}, (err, user) => {
            //gets posts for each user the person follows
            //also gets the user's posts
            user.following.push(user._id);
            user.following.forEach(followedUser => {
                const post = {};
                User.find({_id: followedUser}, (err, user) => {
                    post.user = user;
                }).then(() => {
                    Post.find({author : followedUser}, (err, posts) => {
                        post.photo = posts;
                        feed.push(post);
                    })
                })
            })
        })
    }
}
