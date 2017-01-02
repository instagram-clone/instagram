const app = require('../../index.js');
const Post = require('../../models/Post');

module.exports = {
    postComment: function(req, res, next){
        Post.update({_id: req.body.photoid},
                    {$addToSet: { comments : {
                        username: req.body.username,
                        userid: req.body.userid,
                        comment: req.body.comment
                    }}}, (err, post) => {
                        if(err) return res.status(500).json(err);
                        return res.status(200).json(post);
                    })
    }
}
