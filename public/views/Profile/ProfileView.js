import React from 'react';
import Nav from '../Nav/Nav';
import ProfileInfo from './ProfileInfo';
import {getProfileInfo} from './ProfileResource';

export default class ProfileView extends React.Component{
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
