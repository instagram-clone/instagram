import React from 'react';
import {Link} from "react-router";
import getLoggedInUser from '../../utils/getLoggedInUser';
import axios from 'axios';
import Cookies from 'js-cookie';
import FriendsCarousel from './FriendsCarousel';
import AllTheirFollowers from './AllTheirFollowers';
import AllTheyFollow from './AllTheyFollow';

import {removeUser} from '../../ducks/userDuck';
import {connect} from 'react-redux';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogout: false,
            friendsCarousel: false,
            showTheirFollowers: false,
            showWhoTheyFollow: false
        }
    }

    logout() {
        event.preventDefault();
        Cookies.remove('user');
        this.props.dispatch(removeUser());
        window.location.href = '#/'
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
  toggleShowTheirFollowers(){
    this.setState({
      showTheirFollowers: !this.state.showTheirFollowers
    })
  }
  toggleShowWhoTheyFollow(){
    this.setState({
      showWhoTheyFollow: !this.state.showWhoTheyFollow
    })
  }

  componentWillReceiveProps(nextProps){
    if(this.props.paramUserName !== nextProps.paramUserName){
      this.setState({
        friendsCarousel: false,
        showTheirFollowers: false,
        showWhoTheyFollow: false,
      })
    }
  }

    render() {
        return (

            <div className='profileInfo'>
                {this.state.showLogout
                    ? <div className="logOutToggle">
                    <div className="logoutOverlay" onMouseDown={this.toggleLogout.bind(this)}>
                      </div>
                            <div className="buttonHolder">
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
                        <section className='topRowPosition'>
                            <div className='profileTopRow'>
                                {this.props.currentuser ?
                                        <span className='row'>
                                            <span className='profileUsername'>{this.props.user.username}</span>
                                            <span onClick={this.toggleLogout.bind(this)} className='mobileOptions optionsSprite'></span>
                                        </span>
                                        :   <span className='profileUsername'>{this.props.user.username}</span>
                                    }
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
                                        <span onClick={this.toggleLogout.bind(this)} className='fullOptions optionsSprite'></span>
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
                                <span onClick={this.toggleShowTheirFollowers.bind(this)}>
                                    <span className="count">{this.props.user.followers
                                            ? this.props.user.followers.length + ' '
                                            : 0}</span>
                                    followers
                                </span>
                                <span onClick={this.toggleShowWhoTheyFollow.bind(this)}>
                                    <span className="count">{this.props.user.following
                                            ? this.props.user.following.length + ' '
                                            : 0}</span>
                                    following
                                </span>
                            </div>
                        </section>
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
                    <span onClick={this.toggleShowTheirFollowers.bind(this)} className='col'>
                        <span className="label">{this.props.user.followers
                                ? this.props.user.followers.length + ' '
                                : 0}</span>
                        followers
                    </span>
                    <span className='col' onClick={this.toggleShowWhoTheyFollow.bind(this)}>
                        <span className="label">{this.props.user.following
                                ? this.props.user.following.length + ' '
                                : 0}</span>
                        following
                    </span>
                </div>
                {this.state.friendsCarousel ?
                  <div>
                    <FriendsCarousel user={this.props.user}/>
                  </div>


                  : null}
                  {this.state.showTheirFollowers ?
                    <div className="followModalContainer">
                      <div onClick={this.toggleShowTheirFollowers.bind(this)} className="followModal-bg"></div>
                      <div className="followModal">
                        <div className="followModalHeader">Followers</div>
                        <AllTheirFollowers user={this.props.user}/>
                      </div>
                    </div>
                  : null}
                  {this.state.showWhoTheyFollow ?
                    <div className="followModalContainer">
                      <div onClick={this.toggleShowWhoTheyFollow.bind(this)} className="followModal-bg"></div>
                      <div className="followModal">
                        <div className="followModalHeader">Following</div>
                        <AllTheyFollow user={this.props.user}/>
                      </div>
                    </div>
                  : null}

            </div>

    )
  }
}
export default connect(state => ({storeUser: state.storeUser}))(ProfileInfo);
