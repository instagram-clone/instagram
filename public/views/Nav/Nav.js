import React from 'react';
import {Link} from 'react-router';
export default class Nav extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to="feed">Logo</Link></li>
          <li><Link to="#">Notification</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="upload">Upload</Link></li>
        </ul>
      </div>
    )
  }
}
