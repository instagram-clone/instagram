import React from 'react';
import {Link} from 'react-router';
import loggedInUser from '../../utils/getLoggedInUser';
import Notifications from './Notifications';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStyle: {
                backgroundColor: 'rgb(250,250,250)',
                textAlign: 'center'
            },
            loggedInUserName: loggedInUser.getLoggedInUser().username,
            userData: null
        }
    }
    handleSubmit(e){
        e.preventDefault();
        window.location.href = `/#/search/${this.state.searchText}`;
        window.location.reload();
    }
    onSearchChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    onSearchActive() {
        this.setState({
            searchStyle: {
                backgroundColor: 'inherit',
                textAlign: 'left'
            }
        })
    }
    onSearchLeave() {
        this.setState({
            searchStyle: {
                backgroundColor: 'rgb(250,250,250)',
                textAlign: 'center'
            }
        })
    }
    getUserNotifications(){
        loggedInUser.getAllUserData().then((response) => {
                this.setState({
                    userData: response.data
                })
        })
    }
    closeNotifications(){
        this.setState({
            userData: 0
        })
    }
    render() {
        return (
            <header>
                <div className='nav'>
                    <Link to='feed'>
                        <div className='spriteLogo'></div>
                    </Link>
                    <form onSubmit={this.handleSubmit.bind(this)} className='search'>
                        <input onBlur={this.onSearchLeave.bind(this)}
                               onMouseUp={this.onSearchActive.bind(this)}
                               onChange={this.onSearchChange.bind(this)}
                               placeholder='Search'
                               className='searchField'
                               style={this.state.searchStyle}/>
                        <span className='spriteSearch'></span>
                    </form>
                    <div className='right'>
                        <Link to='upload'>
                            <img src='http://i.imgur.com/xlrhCMf.png' className='plus'>
                            </img>
                        </Link>
                        <Link to='feed'>
                            <div className='spriteDiscover'>
                            </div>
                        </Link>
                        <Link className='desktopNotifs'>
                            <div className='spriteNotifs' onClick={!this.state.userData ? this.getUserNotifications.bind(this) : this.closeNotifications.bind(this)}>
                                {
                                    this.state.userData ? <Notifications user={this.state.userData} /> : null
                                }
                            </div>
                        </Link>
                        <Link to='notifications' className='mobileNotifs'>
                            <div className='spriteNotifs'>
                            </div>
                        </Link>
                        <Link to={this.state.loggedInUserName ? `profile/${this.state.loggedInUserName}` : '#'}>
                            <div className='spriteProfile'>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}
