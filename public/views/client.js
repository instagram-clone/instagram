import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from '../store';
import { Provider } from 'react-redux';

import LoginView from './Login/LoginView';
import FeedView from  './Feed/FeedView';
import ProfileView from './Profile/ProfileView';
import UploadView from './Upload/UploadView';
import EditProfileView from './EditProfile/EditProfileView';
import SearchView from './Search/SearchView';
import ChangePasswordView from './EditProfile/ChangePasswordView';
import NotificationsView from './nav/NotificationsView';
import auth from '../utils/getLoggedInUser';

import Reset from '../styles/Reset.scss';
import Master from '../styles/Master.scss';
import EditProfileStyle from '../styles/EditProfile.scss';
import FeedStyle from '../styles/Feed.scss';
import PhotoCardStyle from '../styles/PhotoCard.scss';
import LoginStyle from '../styles/Login.scss';
import NavStyle from '../styles/Nav.scss';
import ProfileStyle from '../styles/Profile.scss';
import SearchStyle from '../styles/Search.scss';
import UploadStyle from '../styles/Upload.scss';


//checks if a user is logged in, if they are not
//logged in, this redirects them to the
//login/signup page
function requireAuth(nextState, replace) {
	if (!auth.getLoggedInUser()){
	    replace({
	        pathname: '/',
	        state: {
	            nextPathname: nextState.location.pathname
	        }
	    });
	}
}

//checks if a user is logged in, if they are, redirects them
//to the feed page (this is only used on the login page)
function requireNotLoggedIn(nextState, replace) {
    if (auth.getLoggedInUser()){
        replace({
            pathname: '/feed',
            state: {
                nextPathname: nextState.location.pathname
            }
        });
	}
}

class App extends React.Component{
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
						<Route path="/" component={LoginView} onEnter={requireNotLoggedIn}/>
						<Route path="/feed" component={FeedView} onEnter={requireAuth}/>
						<Route path="/profile/:username" component={ProfileView} />
						<Route path="/upload"	component={UploadView} onEnter={requireAuth}/>
						<Route path="/editProfile" component={EditProfileView} onEnter={requireAuth}/>
						<Route path="/search/:searchTerm" component={SearchView}/>
						<Route path="/changePassword" component={ChangePasswordView} onEnter={requireAuth}/>
						<Route path="/notifications" component={NotificationsView} onEnter={requireAuth}/>
				</Router>
			</Provider>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
