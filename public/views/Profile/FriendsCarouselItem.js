import React from 'react';

export default class FriendsCarouselItem extends React.Component{
  constructor(props){
    super(props);
  }

  // getProfile(user) {
  //    if(user === getLoggedInUser().username){
  //      this.setState({
  //        currentuser: true,
  //      })
  //    } else {
  //      this.setState({
  //        currentuser: false,
  //      })
  //    }
  //    getProfileInfo(user).then(response => {
  //      let found = false;
  //      for(let i = 0; i < response.data.followers.length; i++){
  //        if(getLoggedInUser().username === response.data.followers[i].username){
  //          found = true;
  //          this.setState({
  //            showfollowing: true,
  //          });
  //        }
  //      }
  //      if (!found && !this.state.currentuser){
  //        this.setState({
  //          showfollow: true,
  //        });
  //      }
  //      this.setState({user: response.data});
  //    getPostCount(response.data._id).then(response => {
  //        this.setState({posts: response.data});
  //      });
  //    });
  //  }


  render(){


  return(
    <div className="carouselCard">
      <div className="carouselCardPic"><img src={this.props.profilepic}/></div>
      <div className="carouselCardUsername">{this.props.username}</div>
      <div className="carouselCardFullname">{this.props.fullname}</div>
      <span className="button">Follow</span>

    </div>
  )
  }
}
