import React from 'react';
import Nav from '../Nav/Nav';
import PhotoCard from './FeedPhoto/PhotoCard';
import Footer from '../Login/Footer';
export default class FeedView extends React.Component {
    render() {
        return (
            <div className='feedView'>
                <Nav/>
                <PhotoCard/>
                <Footer />
            </div>
        )
    }
}
