import React from 'react';
import Nav from './Nav';
import NotificationCard from './NotificationCard';
import loggedInUser from '../../utils/getLoggedInUser';
import Notifications from './Notifications';

export default class NotificationsView extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        loggedInUser.getAllUserData().then((response) => {
                console.log(response);
                this.setState({
                    notifications: response.data.notifications.reverse()
                })
        });
    }
    render() {
        let notis = [];
        if(this.state.notifications){
          notis = this.state.notifications;
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
