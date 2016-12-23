import React from 'react';
import { Link } from "react-router";
import getLoggedInUser from '../../utils/getLoggedInUser';
import axios from 'axios';
import Cookies from 'js-cookie';


export default class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showLogout: false,
    }
  }

  toggleLogout(){
    this.setState({
      showLogout: !this.state.showLogout
    });
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

              <span className="button" onClick={this.props.clickFollowHandler}>Follow</span>

              : null}
              {this.props.showfollowing ?

              <span className="button">Following</span>

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
              <li id="follow" onClick={this.props.followViewHandle}><span className="bold-profile">{this.props.user.followers ? this.props.user.followers.length : 0}</span> followers</li>
              <li id="follow" onClick={this.props.followViewHandle}><span className="bold-profile">{this.props.user.following ? this.props.user.following.length : 0}</span> following</li>
            </ul>
          </div>
          <div><span className="bold-profile">{this.props.user.fullname}</span>{this.props.user.bio}</div>
        </div>

      </div>
    </div>
    )
  }
}
