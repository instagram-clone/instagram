import React from 'react';
import axios from 'axios';

export default class NotificationCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  componentWillMount(){
    console.log('comp mount!', this.props.userAction);
    axios.get('/api/profileinfo/:username').then((response) => {
      console.log('response', response);
    })
  }
  render(){
    console.log('notification card', this.props);
    return (
      <div className="notificationCard">
        <div>
        <p>{this.props.notification}</p>
        </div>
      </div>
    )
  }
} 