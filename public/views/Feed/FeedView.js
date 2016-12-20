import React from 'react';
import Nav from '../Nav/Nav';
import PhotoCard from './FeedPhoto/PhotoCard';

export default class FeedView extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <PhotoCard/>
            </div>
        )
    }
}
