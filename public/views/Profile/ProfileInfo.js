import React from 'react';
import { Link } from "react-router";

export default class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    }
  }
  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, "this is the child");
  }
  render(){
    return(
      <div>

        <div className="profileInfoContainer">
          <div className="profilePhotoBox">
              <img className="profilePhoto" src={this.props.user.profilepic}/>
          </div>
          <div className="profileInfo">
          <div className="profile-username">{this.props.user.username}

            <div>
              <Link to="/editProfile">
              <span className="button">Edit Profile</span>
            </Link>
            </div>
            <div>
              <span className="button"> . . . </span>
            </div>


          </div>

          <div className="counters">
            <ul>
              <li><span className="bold-profile">{this.props.posts.length}</span> posts</li>
              <li><span className="bold-profile">{this.props.user.followers ? this.props.user.followers.length : 0}</span> followers</li>
              <li><span className="bold-profile">{this.props.user.following ? this.props.user.following.length : 0}</span> following</li>
            </ul>
          </div>
          <div><span className="bold-profile">{this.props.user.fullname}</span>{this.props.user.bio}</div>
        </div>

      </div>
    </div>
    )
  }
}
