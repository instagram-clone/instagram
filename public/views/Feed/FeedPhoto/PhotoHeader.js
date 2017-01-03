import React from 'react';
import {Link} from 'react-router';

export default class PhotoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relativeDate: this.getDate()
        }
    }
    getDate() {
        let date = this.props.timestamp.split('T')[0].split('-');
        date = date.join('/');
        let photo = new Date(date);
        let today = new Date();
        let daysBetween = Math.floor((today - photo) / 86400000);
        let relativeDate;
        //if the photo was posted today, it shows the time,
        //otherwise, it shows how many days or weeks ago it was posted
        if (daysBetween <= 0) {
            var dateTime = this.props.timestamp.split('T')[1].split('-')[0];
            if ((parseInt(dateTime.split(':')[0]) - 7) > 12) {
                dateTime = parseInt(dateTime.split(':')[0]) - 12 + ':' + dateTime.split(':')[1];
                dateTime = Math.abs(today - photo) / 36e5;
            } else {
                dateTime = parseInt(dateTime.split(':')[0]) - 7 + ':' + dateTime.split(':')[1];
            }
            relativeDate = dateTime
        } else if (daysBetween < 7) {
            relativeDate = daysBetween + 'd';
        } else if (daysBetween >= 7 && daysBetween <= 14) {
            relativeDate = '1w'
        } else {
            relativeDate = Math.round(daysBetween / 7) + 'w'
        }
        return relativeDate;
    }
    render() {
        return (
            <div className='photoHeader'>
                <div className='leftSide'>
                    <Link to={`profile/${this.props.username}`}><img src={this.props.profilepic}/></Link>
                    <div className='nameContainer'>
                        <Link className='profileLink' to={`profile/${this.props.username}`}>{this.props.username}</Link>
                        <Link className='locationLink' to={`search/${encodeURIComponent(this.props.location)}`}>{this.props.location}</Link>
                    </div>
                </div>
                <span className='timestamp'>{this.state.relativeDate}</span>
            </div>
        )
    }
}
