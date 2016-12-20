import React from 'react';
import Nav from '../Nav/Nav';
import ProfileInfo from './ProfileInfo';
import {getProfileInfo} from './ProfileResource';
import {getLoggedInUser} from '../../utils/getLoggedInUser';

export default class ProfileView extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }
  componentWillMount(){
    const user = this.props.params.username;
    console.log(user);
    getProfileInfo(user);
  }
  render(){
    return(
      <div>
      <Nav/>
        This is the Profile View! Dude!
      <ProfileInfo/>
      </div>
    )
  }
}
