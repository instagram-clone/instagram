import React from 'react';

import PhotoHeader from './PhotoHeader';
import PhotoContainer from './PhotoContainer';
import CommentDisplay from './CommentDisplay';
import CommentBar from './CommentBar';

export default class PhotoCard extends React.Component{
    constructor(props){
        super(props);
        //make request to database to get all posts by users that
        //the logged in user follows. Then .map them all onto photoCard components
        //PhotoHeader props will be like this => {
        //  PhotoHeader : {profilepic : url, username : 'user1011', location: 'Provo', timestamp:'12h' }
        //  PhotoContainer : {photoUrl : url}
        //  CommentDisplay: {commentData : {
        //      likes: 100,
        //      username: 'user101',
        //      caption: 'here is a photo',
        //      comments : [array of objects with keys for username and comment text]
        //  }}
    }
    render(){
        return (
            <div className='photoCard'>
                <PhotoHeader profilepic='https://instagram.faqa1-1.fna.fbcdn.net/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'
                             username='account100'
                             location='Yosemite'
                             timestamp='12h'/>
                <PhotoContainer photoUrl='https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/15624267_1759251814336779_197713120049758208_n.jpg?ig_cache_key=MTQwODI3ODEzNjcxODU3NjI2OQ%3D%3D.2' />
                <CommentDisplay commentData ={{
                    'likes': 102,
                    'username' : 'account100',
                    'caption': 'yosemite national park',
                    'comments': [
                        {user:'user11', comment: 'cool'},
                        {user:'usernamehere', comment: 'cool ok'}
                ]}} />
                <div className='lineContainer'>
                    <div className='line'>
                    </div>
                </div>
                <CommentBar />
            </div>
        )
    }
}
