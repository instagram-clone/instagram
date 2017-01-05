import React from 'react';
import NotificationCard from './NotificationCard';

export default class Notifications extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  componentWillMount(){
    console.log('props component will mount', this.props);
    this.setState({
      notifications: this.props.user
    }, () => {console.log(this.state, 'noti props')});
  }
  render(){
    let notis = [];
    if(this.state.notifications){
      notis = this.state.notifications.notifications;
      console.log('array beeing mapped', notis);
    }
    const notificationsList = <NotificationCard user={this.state.notifications} />
    // const notificationsList = notis.map(noti => (
    //   <NotificationCard
    //     user={this.state.notifications}
    //   />
    // ) );
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