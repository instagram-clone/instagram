import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LoginView from './Login/LoginView';
import FeedView from  './Feed/FeedView';
import ProfileView from './Profile/ProfileView';
import UploadView from './Upload/UploadView';

import Reset from '../styles/Reset.scss';
import Master from '../styles/Master.scss';
import EditProfileStyle from '../styles/EditProfile.scss';
import FeedStyle from '../styles/Feed.scss';
import FeedPhotoStyle from '../styles/FeedPhoto.scss';
import LoginStyle from '../styles/Login.scss';
import NavStyle from '../styles/Nav.scss';
import ProfileStyle from '../styles/Profile.scss';
import SearchStyle from '../styles/Search.scss';
import UploadStyle from '../styles/Upload.scss';

class App extends React.Component{
	render() {
		return (
			<Router history={hashHistory}>
					<Route path="/" component={LoginView}/>
					<Route path="/feed" component={FeedView}/>
					<Route path="/profile" component={ProfileView}/>
					<Route path="/upload"	component={UploadView}/>
			</Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
