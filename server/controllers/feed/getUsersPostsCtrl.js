var q = require('q');

const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {

    getFeed : function(req, res, next){
        let feed = [];
        setTimeout(() => {
            return res.status(200).json(feed);
        }, 400);

        User.findOne({username: req.query.username}, (err, user) => {
            //gets posts for each user the person follows
            user.following.forEach(followedUser => {
                let post = {};
                User.find({_id: followedUser}, (err, user) => {
                    post.user = user;
                }).then(() => {
                    Post.find({author : followedUser}, (err, posts) => {
                        let postArr = [];
                        posts.forEach(post => {
                            postArr.push(post);
                        })
                        post.photo = postArr;
                        feed.push(post);
                    })
                })
            })
        })
    }
}
