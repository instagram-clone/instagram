import React from 'react';
import {Link} from "react-router";
import getLoggedInUser from '../../utils/getLoggedInUser';
import axios from 'axios';
import Cookies from 'js-cookie';
import FriendsCarousel from './FriendsCarousel';


export default class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showLogout: false,
      friendsCarousel: false,
    }
  }

  toggleLogout(){
    this.setState({
      showLogout: !this.state.showLogout
    });
  }
  toggleFriendsCarousel(){
    this.setState({
      friendsCarousel: !this.state.friendsCarousel
    })
  }

  logout(){
    event.preventDefault();
    Cookies.remove('user');
    window.location.href = '#/'
  }

  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){
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
                            <span className='profileUsername'>{this.props.user.username}</span>
                                {this.props.currentuser
                                    ?
                                        <span>
                                            <Link to="/editProfile">
                                                <button className="hideOnMobile button buttonClear">Edit Profile</button>
                                            </Link>
                                        </span>
                                    : null}
                                {this.props.showfollow
                                    ?  <div className='row'>
                                            <div className="button buttonBlue buttonClear" onClick={this.props.clickFollowHandler}>Follow</div>
                                            <div onClick={this.toggleFriendsCarousel.bind(this)}  className='button buttonClear buttonBlue followSpacing followSprite'>
                                                <div className="arrowSpriteFollow"> </div>
                                            </div>
                                        </div>
                                    : null}
                                {this.props.showfollowing
                                    ?  <span className='row'>
                                            <div className="following button followSpacing" onClick={this.props.clickUnfollowHandler}>Following</div>
                                            <div onClick={this.toggleFriendsCarousel.bind(this)} className='following button followSprite'>
                                                <div className="arrowSpriteFollowing"> </div>
                                            </div>
                                        </span>
                                    : null}
                            {this.props.currentuser
                                ?
                                    <span onClick={this.toggleLogout.bind(this)} className='optionsSprite'></span>
                                :   null}
                            <div className={`appLinks ${this.state.showLogout
                                ? "loginSpacing"
                                : null}`}></div>
                        </div>
                        {this.props.currentuser
                            ?
                            <div>
                              <Link className='showOnMobile' to="/editProfile">
                                <button className="button buttonClear">Edit Profile</button>
                              </Link>
                              <span onClick={this.toggleLogout.bind(this)} className='optionsSprite'></span>
                            </div>
                             : null}
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
                {this.state.friendsCarousel ?
                  <div className="friends-carousel">
                    <h1>Suggested</h1>
                    <FriendsCarousel user={this.props.user}/>
                  </div>


                  : null}
            </div>



    )
  }
}
