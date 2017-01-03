import React from 'react';
import { Link } from "react-router";
import getLoggedInUser from '../../utils/getLoggedInUser';
import axios from 'axios';
import Cookies from 'js-cookie';
import FriendsCarousel from './FriendsCarousel';


export default class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showLogout: false,
      friendsCarousel: false,
    }
  }

  toggleLogout(){
    this.setState({
      showLogout: !this.state.showLogout
    });
  }
  toggleFriendsCarousel(){
    this.setState({
      friendsCarousel: !this.state.friendsCarousel
    })
  }

  logout(){
    event.preventDefault();
    Cookies.remove('user');

    window.location.href = '#/'
  }

  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, "this is the child");

  }


  render(){
    return(

      <div>
        {this.state.showLogout ? <div className="logoutOverlay"> <div>
        <ul className="logoutUl">
        <li className="logoutLi">
        <button onClick={this.logout.bind(this)} className="logoutButton">Log out</button>
        </li>
        <li className="logoutLi">
        <button onClick={this.toggleLogout.bind(this)} className="logoutButton">Cancel</button>
        </li>
        </ul>
        </div></div> : null}

        <div className="profileInfoContainer">
          <div className="profilePhotoBox">
              <img className="profilePhoto" src={this.props.user.profilepic}/>
          </div>
          <div className="profileInfo">
          <div className="profile-username">{this.props.user.username}

            <div>
              {this.props.currentuser ?
              <Link to="/editProfile">
              <button className="button">Edit Profile</button>
            </Link>
              : null}
              {this.props.showfollow ?
                  <div>
                    <span className="button" onClick={this.props.clickFollowHandler}>Follow</span>
                    <span><img onClick={this.toggleFriendsCarousel.bind(this)} className="button followingarrow" src="http://image.flaticon.com/icons/png/512/60/60995.png"/></span>
                  </div>
              : null}
              {this.props.showfollowing ?
                  <div>
                    <span className="button" onClick={this.props.clickUnfollowHandler}>Following</span>
                    <span><img onClick={this.toggleFriendsCarousel.bind(this)} className="button followingarrow" src="http://image.flaticon.com/icons/png/512/60/60995.png"/></span>
                  </div>
              : null}
            </div>
            <div>

              <button onClick={this.toggleLogout.bind(this)} className="button">...</button>

            </div>

            <div className={`appLinks ${this.state.showLogout ? "loginSpacing" : null}`}>
            </div>

          </div>

          <div className="counters">
            <ul>
              <li><span className="bold-profile">{this.props.posts.length}</span> posts</li>
              <li><span className="bold-profile">{this.props.user.followers ? this.props.user.followers.length : 0}</span> followers</li>
              <li><span className="bold-profile">{this.props.user.following ? this.props.user.following.length : 0}</span> following</li>
            </ul>
          </div>
          <div><span className="bold-profile">{this.props.user.fullname}</span>{this.props.user.bio}
        </div>
        </div>

      </div>

        {this.state.friendsCarousel ?
          <div className="friends-carousel">
            <h1>Suggested</h1>
            <FriendsCarousel user={this.props.user}/>
          </div>


          : null}

    </div>

    )
  }
}
