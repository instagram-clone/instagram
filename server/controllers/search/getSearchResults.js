const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {
    getSearchResults(req, res, next){
        console.log(req.params.searchTerm);
        var searchResults = {};
        setTimeout(()=>{
            console.log(searchResults);
            return res.json(searchResults);
        }, 140)
        Post.find( { $text : {$search: req.params.searchTerm } }, (err, response) => {
            searchResults.posts = response;
            console.log(searchResults);
            searchResults.posts.forEach((result, i) => {
                User.findOne({_id: result.author}, (err, user)=> {
                    searchResults.posts[i].author = user;
                });
            });
        });
        User.find( { $text : {$search: req.params.searchTerm } }, (err, result) => {
            searchResults.users = result;
        });
    }
}
