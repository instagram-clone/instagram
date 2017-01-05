import React from 'react';
import {getProfiles} from './ProfileResource.js';
import {getAllUserData} from '../../utils/getLoggedInUser';
import SpecificFollower from './SpecificFollower';

export default class AllTheirFollowers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    const followerList =  this.props.user.followers
      .map(singleFollower => (
        <SpecificFollower
          key = {singleFollower._id}
          fullname = {singleFollower.fullname}
          username = {singleFollower.username}
          profilepic = {singleFollower.profilepic}
          _id= {singleFollower._id}
        />
      ));
    return(
      <div>
        {followerList}
      </div>
    )
  }

}
