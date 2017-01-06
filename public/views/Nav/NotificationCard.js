import React from 'react';
import axios from 'axios';

export default class NotificationCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  getProfiles(user){
    axios.get(`/api/getprofiles/${user}`).then((response) => {
      console.log('axios', response.data);
      this.setState({
        user: response.data
      })
    });
  }
  componentWillMount(){
    this.getProfiles(this.props.userAction);
  }
  render(){
    console.log('photcard', this.props);
    if(!this.state.user){
      this.state.user = " "
    }
    return (
      <div className="notificationCard">
        <div>
          <div>
            <img src={this.state.user.profilepic} />
            <span>{this.state.user.username}</span>
            <p>{this.props.notification}</p>
          </div>
          <img className="postImg" src={this.props.post} />
        </div>
        
        <div id="lineNoti" className='lineContainer'>
            <div className='line'></div>
        </div>
      </div>
    )
  }
} 