import React from 'react';
import axios from 'axios';
import SpecificFollowedProfile from './SpecificFollowedProfile';
import {getAllUserData} from '../../utils/getLoggedInUser';

export default class AllTheyFollow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    const followingList = this.props.user.following
      .map(singleFollowedOne =>(
        <SpecificFollowedProfile
          key= {singleFollowedOne._id}
          fullname = {singleFollowedOne.fullname}
          username = {singleFollowedOne.username}
          profilepic = {singleFollowedOne.profilepic}
          _id = {singleFollowedOne._id}
        />
      ))
    return(
      <div>
        {followingList}
      </div>
    )
  }
}
