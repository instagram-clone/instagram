import React from 'react';
import axios from 'axios';
import {getLoggedInUser, getAllUserData} from '../../utils/getLoggedInUser';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import PhotoCard from './FeedPhoto/PhotoCard';
import Footer from '../Login/Footer';
import WelcomeCard from './welcomeCard';
import AddProfileImg from './AddProfileImg';

class FeedView extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        console.log(this.props.user);
        this.state = {
            feedSet: false,
            default: 'https://scontent-fra3-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'
        }
    }
    componentDidMount() {
        let feed = [];
        axios.get('/api/feed?username=' + getLoggedInUser().username).then(response => {
            feed = response.data.map(userGrouping => {
                return userGrouping.photo.map((photo, i) => {
                    return <PhotoCard key = {photo._id + i} user={userGrouping.user} photo={photo}/>
                })
            }).reduce((fullArr, innerArr) => {
                return fullArr.concat(innerArr);
            }).sort((a, b) => {
                a = new Date(a.props.photo.timestamp)
                b = new Date(b.props.photo.timestamp);
                return a > b ? -1 : a < b ? 1 : 0;
            })
            window.setTimeout(() => {
                this.setState({feed, feedSet: true})
                console.log(feed);
            }, 100)
        });
        getAllUserData().then(res => {
            this.setState({
                profPic : res.data.profilepic
            })
        })
    }
    render() {
        return (
            <div className='feedView'>
                <Nav/>
                {this.state.profPic === this.state.default ? <AddProfileImg/> : null}
                {this.state.feedSet && this.state.feed.length > 0 ? null : <WelcomeCard/> }
                {this.state.feedSet ? this.state.feed : null}
                <Footer/>
            </div>
        )
    }
}

export default connect(state => ({user: state.user}))(FeedView);
