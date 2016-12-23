import Cookies from 'js-cookie';
import axios from 'axios';


module.exports = {
    getLoggedInUser: function(){
        var user = Cookies.get('user');
        if(user){
            return JSON.parse(user);
        }else{
            return false;
        }
    },
    getAllUserData: function(){
        return axios.get('/api/currentUser/' + JSON.parse(Cookies.get('user')).username);
    }
}
