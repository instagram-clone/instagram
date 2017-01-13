import React from 'react';
import axios from 'axios';
import {getLoggedInUser} from '../../utils/getLoggedInUser';
import {getAllUserData} from '../../utils/getLoggedInUser';
import {Link} from 'react-router';


export default class SpecificFollower extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showfollowing: false,
      showfollow: true,
    }
  }

  clickFollowHandler(){
    this.setState({
      showfollow: false,
      showfollowing: true,
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


    componentWillMount(){
      getAllUserData().then(response =>{
        console.log('stepping into specificFollower');
        let userFollowedList = response.data.following;
        console.log(userFollowedList);
        console.log(this.props._id, "where am I?");
        for (let i = 0; i < userFollowedList.length; i++){
          if(userFollowedList[i] === this.props._id){
            this.setState({
              showfollowing: true,
              showfollow: false,
            })
          }
          if(response.data._id === this.props._id){
            this.setState({
              showfollowing: false,
              showfollow: false,
            })
          }

        }
      });
    }
  render(){



    return(
      <div className="followModalElement">
        <div className="followModalLeftCol">
        <Link to={`/profile/${this.props.username}`}>
        <div><img className="followModalPic" src={this.props.profilepic}/></div>
        </Link>
        <div className="followModalLeftSubCol">
          <div className="followModalUsername"><Link to={`/profile/${this.props.username}`}>{this.props.username}</Link></div>
          <div className="followModalFullname">{this.props.fullname}</div>
        </div>
        </div>
        <div className="followModalRightCol">
        {this.state.showfollow
            ?  <div>
                    <div className="followModalButton button buttonBlue buttonClear" onClick={this.clickFollowHandler.bind(this)}>Follow</div>
                </div>
            : null}

        {this.state.showfollowing
            ?  <div>
                    <div className="followModalButton button modalFollowing" onClick={this.clickUnfollowHandler.bind(this)}>Following</div>
                </div>
            : null}
          </div>
      </div>
    )
  }
}
