import React from 'react';
import axios from 'axios';
import {getLoggedInUser} from '../../utils/getLoggedInUser';

export default class FriendsCarouselItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showfollowing: false,
      showfollow: true,
    }
  }

  clickFollowHandler(){
    this.setState({
      showfollow: false,
      showfollowing: true,
    }, () => {
      console.log(this.state.showfollow, this.state.showfollowing, 'following');
    });
    axios.put(`/api/followuser/${getLoggedInUser().username}`, {username: this.props.username});
    axios.put(`/api/addfollower/${getLoggedInUser().username}`, {username: this.props.username});
    }

    clickUnfollowHandler(){
      this.setState({
        showfollow: true,
        showfollowing: false,
      }, ()=> {
      });
      axios.put(`/api/unfollowuser/${getLoggedInUser().username}`, {username: this.props.username});
      axios.put(`/api/removefollower/${getLoggedInUser().username}`, {username: this.props.username});
    }

  render(){


  return(
    <div className="carouselCard">
      <div className="carouselCardPic"><img src={this.props.profilepic}/></div>
      <div className="carouselCardUsername">{this.props.username}</div>
      <div className="carouselCardFullname">{this.props.fullname}</div>
      


      <div>
      {this.state.showfollow
          ?  <div className='row'>
                  <div className="button buttonBlue buttonClear" onClick={this.clickFollowHandler.bind(this)}>Follow</div>
              </div>
          : null}

      {this.state.showfollowing
          ?  <span className='row'>
                  <div className="following button followSpacing" onClick={this.clickUnfollowHandler.bind(this)}>Following</div>
              </span>
          : null}
        </div>


    </div>
  )
  }
}
