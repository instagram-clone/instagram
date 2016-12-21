import React from 'react';
import Nav from '../Nav/Nav';
import ProfileInfo from './ProfileInfo';
import {getProfileInfo} from './ProfileResource';
import {getLoggedInUser} from '../../utils/getLoggedInUser';
import {getPostCount} from './ProfileResource';

export default class ProfileView extends React.Component{
  constructor(){
    super();
    this.state = {
      user: {},
      posts: [],
    }
  }
  componentWillMount(){
    const user = this.props.params.username;
    console.log(user);
    getProfileInfo(user).then(response => {
      console.log(response, 'user');
      this.setState({user: response.data});
      getPostCount(response.data._id).then(response => {
        console.log(response, 'post count');
        this.setState({posts: response.data});
      })
    })

  }
  render(){
    return(
      <div>
      <Nav/>
        This is the Profile View! Dude!
      <ProfileInfo user={this.state.user} posts={this.state.posts}/>
      </div>
    )
  }
}
