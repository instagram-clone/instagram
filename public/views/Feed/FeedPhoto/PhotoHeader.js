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
        // let date = this.props.timestamp.split('T')[0].split('-');
        // date = date.join('/');
        let photoDate = new Date(this.props.timestamp);
        let photo = Date.parse(this.props.timestamp);
        let today = new Date();
        let daysBetween = Math.floor((today - photo) / 86400000);
        let relativeDate;
        //if the photo was posted today, it shows the difference in hours, or minutes,
        //otherwise, it shows how many days or weeks ago it was posted
        if (Math.round(Math.abs(today - photoDate) / 36e5) < 24) {
            //checks if photo was posted less than an hour ago
            console.log(Math.round(Math.abs(today - photoDate) / 36e5));
            if (Math.round(Math.abs(today - photoDate) / 36e5) <= 0) {
                let minsDiff = Math.round((today.getTime() - photoDate.getTime())/60000);
                if (minsDiff === 0) {
                    relativeDate = 'now';
                } else {
                    relativeDate = minsDiff + 'm';
                }
            } else {
                //get difference in hours
                relativeDate = Math.round(Math.abs(today - photoDate) / 36e5) + 'h';
            }
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
