const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {
    getSearchResults(req, res, next){
        console.log(req.params.searchTerm);
        Post.find( { $text : {$search: req.params.searchTerm } }, (err, response) => {
            console.log(response);
            res.json(response);
        });
    }
}
