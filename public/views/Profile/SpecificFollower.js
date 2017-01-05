import React from 'react';
import axios from 'axios';
import {getLoggedInUser} from '../../utils/getLoggedInUser';
import {getAllUserData} from '../../utils/getLoggedInUser';


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
      <div className="followersModal">
        <div className="Pic"><img src={this.props.profilepic}/></div>
        <div className="followersModalUsername">{this.props.username}</div>
        <div className="followersModalFullname">{this.props.fullname}</div>
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
