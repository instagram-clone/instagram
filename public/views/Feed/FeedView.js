import React from 'react';
import axios from 'axios';
import {getLoggedInUser} from '../../utils/getLoggedInUser';

import Nav from '../Nav/Nav';
import PhotoCard from './FeedPhoto/PhotoCard';
import Footer from '../Login/Footer';
import WelcomeCard from './welcomeCard';
import AddProfileImg from './AddProfileImg';

export default class FeedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedSet: false
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
            }, 80)
        });
    }
    render() {
        return (
            <div className='feedView'>
                <Nav/>
                <AddProfileImg/>
                {this.state.feedSet && this.state.feed.length > 0 ? null : <WelcomeCard/> }
                {this.state.feedSet ? this.state.feed : null}
                <Footer/>
            </div>
        )
    }
}
