import React from 'react';
import axios from 'axios';

import PhotoHeader from './PhotoHeader';
import PhotoContainer from './PhotoContainer';
import CommentDisplay from './CommentDisplay';
import CommentBar from './CommentBar';

import {getAllUserData} from '../../../utils/getLoggedInUser';

export default class PhotoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getAllUserData().then(res => {
            let alreadyLiked = false;
            if (this.props.photo.likes.length > 0) {
                alreadyLiked = this.props.photo.likes.filter(id => {
                    if (id === res.data._id) {
                        return true;
                    }
                });
            }
            this.setState({alreadyLiked, userData: res, likesCount: this.props.photo.likes.length});
        });
    }

    addFavorite() {
        axios.post('/api/favorite', {
            photoID: this.props.photo._id,
            userID: this.state.userData.data._id
        });
        this.setState({
            likesCount: this.state.likesCount + 1,
            alreadyLiked: !this.state.alreadyLiked
        })
    }

    removeFavorite() {
        axios.post('/api/unfavorite', {
            photoID: this.props.photo._id,
            userID: this.state.userData.data._id
        });
        this.setState({
            likesCount: this.state.likesCount - 1,
            alreadyLiked: !this.state.alreadyLiked
        })
    }

    render() {
        return (
            <div className='photoCard'>
                <PhotoHeader profilepic={this.props.user[0].profilepic}
                             username={this.props.user[0].username}
                             location=''
                             timestamp={this.props.photo.timestamp}/>
                <PhotoContainer filter={this.props.photo.filter}
                                photoUrl={this.props.photo.photourl}/>
                <CommentDisplay commentData={{
                    likes: this.state.likesCount,
                    username: this.props.user[0].username,
                    caption: this.props.photo.description,
                    comments: [this.props.photo.comments]
                }}/>
                <div className='lineContainer'>
                    <div className='line'></div>
                </div>
                <CommentBar alreadyFavorited={this.state.alreadyLiked}
                            favorite={this.addFavorite.bind(this)}
                            unfavorite={this.removeFavorite.bind(this)}/>
            </div>
        )
    }
}
