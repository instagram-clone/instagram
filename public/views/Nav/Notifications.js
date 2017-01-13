import React from 'react';
import NotificationCard from './NotificationCard';
import axios from 'axios';

export default class Notifications extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  componentWillMount(){
    this.setState({
      notifications: this.props.user
    });
  }
  render(){
    let notis = [];
    if(this.state.notifications){
      notis = this.state.notifications.notifications.reverse();
    }
    const notificationsList = notis.map(noti => (
      <NotificationCard
        user={this.state.notifications}
        notification={noti.notification}
        userAction={noti.user}
        key={noti._id}
        post={noti.post}
        time={noti.time}
      />
    ) );
    return(
      <div>
        <div className="triangle"></div>

        <div className="notifications">
          <div>
            {notificationsList}
          </div>
        </div>
      </div>
    )
  }
}
