import React from 'react';
import Nav from '../Nav/Nav';
import PhotoCard from './FeedPhoto/PhotoCard';
import Footer from '../Login/Footer';
import WelcomeCard from './welcomeCard';
import AddProfileImg from './AddProfileImg';

export default class FeedView extends React.Component {
    render() {
        return (
            <div className='feedView'>
                <Nav />
                <AddProfileImg />
                <WelcomeCard />
                <PhotoCard />
                <Footer />
            </div>
        )
    }
}
