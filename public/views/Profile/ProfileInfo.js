import React from 'react';

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

        <div className="profile-container">
          <div >
              <img className="profilePhoto" src={this.props.user.profilepic}/>
          </div>
          <div>{this.props.user.username}</div>
          <div>
            <button>Edit Profile</button>
          </div>
          <button> Dot Dot Dot Image</button>
          <div>
            <ul>
              <li>{this.props.posts.length} posts</li>
              <li>{this.props.user.followers ? this.props.user.followers.length : 0} followers</li>
              <li>{this.props.user.following ? this.props.user.following.length : 0} following</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
