const Post = require('../../models/Post');

module.exports = {
    deletePhoto : function(req, res, next){
        Post.findOneAndRemove({_id: req.params.photoID}, (err, photo) => {
            console.log(req.params.photoID);
            console.log(photo);
            console.log(err);
            if(!err){
                res.send(200).json(photo);
            }
        })
    }
}
