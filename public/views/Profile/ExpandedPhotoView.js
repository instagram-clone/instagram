import React from 'react';
import axios from 'axios';
import CommentDisplay from './../Feed/FeedPhoto/CommentDisplay';
import CommentBar from './../Feed/FeedPhoto/CommentBar';
import PhotoContainer from './../Feed/FeedPhoto/PhotoContainer';
import PhotoHeader from './../Feed/FeedPhoto/PhotoHeader';

import {getAllUserData} from './../../utils/getLoggedInUser';

export default class ExpandedPhotoView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alreadyLiked: 'false',
            comments: this.props.photo.comments
        }
    }
    componentDidMount() {
        getAllUserData().then(res => {
            let alreadyLiked = false;
            if (this.props.info.likes.length > 0) {
                alreadyLiked = this.props.info.likes.filter(id => {
                    if (id === res.data._id) {
                        return true;
                    }
                });
            }
            this.setState({alreadyLiked, userData: res, likesCount: this.props.info.likes.length});
        });
    }
    addFavorite() {
        axios.post('/api/favorite', {
            photoID: this.props.photo.id,
            userID: this.state.userData.data._id
        });
        this.setState({
            likesCount: this.state.likesCount + 1,
            alreadyLiked: !this.state.alreadyLiked
        })
    }

    removeFavorite() {
        axios.post('/api/unfavorite', {
            photoID: this.props.photo.id,
            userID: this.state.userData.data._id
        });
        this.setState({
            likesCount: this.state.likesCount - 1,
            alreadyLiked: !this.state.alreadyLiked
        })
    }

    postComment(comment) {
        axios.post('/api/postComment', {
            comment,
            userid: this.state.userData.data._id,
            photoid: this.props.photo.id,
            username: this.state.userData.data.username
        })
        let newComments = this.state.comments;
        newComments.push({username: this.state.userData.data.username, comment})
        this.setState({comments: newComments})
        //console.log(this.state);
    }

    render() {
        console.log(this.props, "props");
        var bgImg = {
            backgroundImage: 'url(' + this.props.photourl + ')',
            backgroundPosition: 'center'
        }
        return (
            <div className="expanded-view">
                <span onClick={() => {
                    this.props.close()
                }}>x</span>
                <div className="expanded-bg" onClick={() => {
                    this.props.close()
                }}></div>
                <div id="expanded-content">
                    <PhotoContainer filter={this.props.filter}
                                    photoUrl={this.props.photourl}/>
                    <div className="expand-comments photoCard">
                        <PhotoHeader username = {this.props.info.author.username}
                                     profilepic={this.props.info.author.profilepic}
                                     timestamp={this.props.info.timestamp} />
                        <CommentDisplay commentData={{
                            likes: this.state.likesCount,
                            username: this.props.user[0].author.username,
                            caption: this.props.info.description,
                            comments: this.props.info.comments
                        }}/>
                        <div id="comment-container">
                            <div className='lineContainer'>
                                <div className='line'></div>
                            </div>
                            <CommentBar alreadyFavorited={this.state.alreadyLiked} favorite={this.addFavorite.bind(this)} unfavorite={this.removeFavorite.bind(this)} postComment={this.postComment.bind(this)}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
