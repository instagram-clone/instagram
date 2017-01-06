import React from 'react';
import axios from 'axios';

export default class NotificationCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      relativeDate: this.getDate()
    }
  }
  getDate(){
    let photoDate = new Date(this.props.time);
    let photo = Date.parse(this.props.time);
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
            <p className="notiTime">{this.state.relativeDate}</p>
          </div>
          {
            this.props.post === 'yay' ? null : <img className="postImg" src={this.props.post} /> 
          }
          
        </div>
        
      </div>
    )
  }
} 