import React from 'react';
import {Link} from "react-router";
import getLoggedInUser from '../../utils/getLoggedInUser';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogout: false
        }
    }

    toggleLogout() {
        this.setState({
            showLogout: !this.state.showLogout
        });
    }

    logout() {
        event.preventDefault();
        Cookies.remove('user');
        window.location.href = '#/'
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "this is the child");
    }

    render() {
        return (

            <div className='profileInfo'>
                {this.state.showLogout
                    ? <div className="logoutOverlay">
                            <div>
                                <ul className="logoutUl">
                                    <li className="logoutLi">
                                        <button onClick={this.logout.bind(this)} className="logoutButton">Log out</button>
                                    </li>
                                    <li className="logoutLi">
                                        <button onClick={this.toggleLogout.bind(this)} className="logoutButton">Cancel</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    : null}
                <div className='profileInfoRow'>
                    <img className="profilePhoto" src={this.props.user.profilepic}/>
                    <div className="profileInfoRight">
                        <div className='profileTopRow'>
                            <span className='username'>{this.props.user.username}</span>
                                {this.props.currentuser
                                    ? <Link to="/editProfile">
                                            <button className="hideOnMobile button buttonClear">Edit Profile</button>
                                        </Link>
                                    : null}
                                {this.props.showfollow
                                    ? <span className="button buttonClear" onClick={this.props.clickFollowHandler}>Follow</span>

                                    : null}
                                {this.props.showfollowing
                                    ?<div className="following button" onClick={this.props.clickUnfollowHandler}>Following</div>
                                    : null}
                                {this.props.showfollowing
                                    ?<div className='following button'>
                                        <div className="arrowSprite"></div>
                                    </div>
                                    : null}
                                <div onClick={this.toggleLogout.bind(this)} className='optionsSprite'></div>
                            <div className={`appLinks ${this.state.showLogout
                                ? "loginSpacing"
                                : null}`}></div>
                        </div>
                        <Link className='showOnMobile' to="/editProfile">
                            <button className="button buttonClear">Edit Profile</button>
                        </Link>
                        <div className='counters'>
                            <span>
                                <span className="count">{this.props.posts.length + ' '}
                                </span>
                                posts
                            </span>
                            <span>
                                <span className="count">{this.props.user.followers
                                        ? this.props.user.followers.length + ' '
                                        : 0}</span>
                                followers
                            </span>
                            <span>
                                <span className="count">{this.props.user.following
                                        ? this.props.user.following.length + ' '
                                        : 0}</span>
                                following
                            </span>
                        </div>
                        <span className='bioContainer'>
                            <span className='name'>
                                {this.props.user.fullname}
                            </span>
                            {this.props.user.bio}
                        </span>
                    </div>
                </div>
                <span className='mobileBioContainer'>
                    <span className='name'>
                        {this.props.user.fullname}
                    </span>
                    {this.props.user.bio}
                </span>
                <div className='mobileCounters'>
                    <span className='col'>
                        <span className="label">{this.props.posts.length}
                        </span>
                        posts
                    </span>
                    <span className='col'>
                        <span className="label">{this.props.user.followers
                                ? this.props.user.followers.length + ' '
                                : 0}</span>
                        followers
                    </span>
                    <span className='col'>
                        <span className="label">{this.props.user.following
                                ? this.props.user.following.length + ' '
                                : 0}</span>
                        following
                    </span>
                </div>
            </div>

        )
    }
}
