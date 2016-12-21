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
        Here is the profile info!


          <div>
              <img src={this.props.profilepic}/>
          </div>
          <div>{this.props.username}</div>
          <div>
            <button>Edit Profile</button>
          </div>
          <div> Dot Dot Dot Image</div>
          <div>
            <ul>
              <li>posts</li>
              <li>{this.props.followers ? this.props.followers.length : 0} followers</li>
              <li>{this.props.following ? this.props.following.length : 0} following</li>
            </ul>
          </div>


      </div>
    )
  }
}
