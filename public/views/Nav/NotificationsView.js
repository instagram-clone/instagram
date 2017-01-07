import React from 'react';
import Nav from './Nav';
import NotificationCard from './NotificationCard';
import Notifications from './Notifications';

export default class NotificationsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('props component will mount', this.props);
        this.setState({
            notifications: this.props.user
        }, () => {
            console.log(this.state, 'noti props')
        });
    }

    render() {
        let notis = [];
        if(this.state.notifications){
          notis = this.state.notifications.notifications.reverse();
          console.log('array beeing mapped', notis);
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
        ));
        return (
            <div className='notificationsView'>
                <Nav/>
                {notificationsList}
            </div>
        )
    }
}
