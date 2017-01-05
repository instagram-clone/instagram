const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {
    getSearchResults(req, res, next){
        console.log(req.params.searchTerm);
        var searchResults = [];
        setTimeout(()=>{
            console.log(searchResults);
            return res.json(searchResults);
        }, 200)
        Post.find( { $text : {$search: req.params.searchTerm } }, (err, response) => {
            searchResults = response;
            searchResults.forEach((result, i) => {
                User.findOne({_id: result.author}, (err, user)=> {
                    searchResults[i].author = user;
                });
            });
        });
    }
}
