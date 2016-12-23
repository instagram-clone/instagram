const app = require('../../index.js');
const Post = require('../../models/Post');

module.exports = {
    favorite: function(req, res, next){
        console.log(req.body);
        Post.update(
            {_id: req.body.photoID},
            {$addToSet: { likes : req.body.userID }},
            (err, post) => {
                if(err) return res.status(500).json(err);
                return res.status(200).json(post);
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
