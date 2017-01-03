import React from 'react';
import FriendsCarouselItem from './FriendsCarouselItem.js';
import {getProfiles} from './ProfileResource.js';
import {getAllUserData} from '../../utils/getLoggedInUser';


export default class FriendsCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };
  componentWillMount(){
    let suggestedFriends = [];
    let targetFollowers = this.props.user.followers;
    getAllUserData().then(response =>{
      let followedProfiles = response.data.following;
      console.log(followedProfiles, 'followed profiles');
      let filteredFriends = [];
      let found = false;
        for(let i = 0; i < targetFollowers.length; i++){
          for(let j = 0; j < followedProfiles.length; j++){
            if(targetFollowers[i]._id === followedProfiles[j]){
              found = true;
            }
          }
          if (!found){
            filteredFriends.push(targetFollowers[i]);
          }
        }
        console.log(filteredFriends, 'these are filtered friends');
       suggestedFriends = filteredFriends
        .map(suggestedFriend => (
        <FriendsCarouselItem
          key = {suggestedFriend._id}
          fullname = {suggestedFriend.fullname}
          username = {suggestedFriend.username}
          profilepic = {suggestedFriend.profilepic}
        />
      ));
      this.setState({
        suggestedFriends
      })
    });

  }

  render(){
    

    return(
      <div>
        {this.state.suggestedFriends}
      </div>
    )
  }
}
