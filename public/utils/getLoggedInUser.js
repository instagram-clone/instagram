import Cookies from 'js-cookie';

module.exports = {
    getLoggedInUser: function(){
        var user = Cookies.get('user');
        if(user){
            return JSON.parse(user);
        }else{
            return false;
        }
    }
}
