import React from 'react';

import PhotoHeader from './PhotoHeader';
import PhotoContainer from './PhotoContainer';
import CommentDisplay from './CommentDisplay';
import CommentBar from './CommentBar';

export default class PhotoCard extends React.Component{
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
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='photoCard'>
                <PhotoHeader profilepic={this.props.user[0].profilepic}
                             username={this.props.user[0].username}
                             location=''
                             timestamp={this.props.photo.timestamp}/>
                <PhotoContainer filter={this.props.photo.filter} photoUrl= {this.props.photo.photourl} />
                <CommentDisplay commentData = {{
                    likes: this.props.photo.likes.length,
                    username : this.props.user[0].username,
                    caption: this.props.photo.description,
                    comments: [
                        this.props.photo.comments
                    ]
                }} />
                <div className='lineContainer'>
                    <div className='line'>
                    </div>
                </div>
                <CommentBar />
            </div>
        )
    }
}
