const app = require('../../index.js');
const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {
    postPhoto : function(req, res, next){
        console.log(req.body);
        User.findOne({username: req.body.data.author}, (err, user) => {
            const newPost = new Post({
                author: user._id,
                photourl: req.body.data.imgUrl,
                timestamp: req.body.data.date,
                description: req.body.data.caption
            });
            newPost.save((err, post) => {
                if(err) return res.status(500).json(err);
                return res.status(200).json(post);
            });
        });
    }
}
