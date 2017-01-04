import React from 'react';
import {Link} from 'react-router';

export default class CommentDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentArr : props.commentData.comments
        }
    }
    createArr(){
        const comments = this.state.commentArr.map((comment, i) => {
                        return (
                            <div key={i} className='commentInfo'>

                                <Link to={`profile/${comment.username}`} className='bold username'>{comment.username}</Link>
                                <span className='comment' id="comment-profile">{comment.comment}</span>

                            </div>
                        )
                   });
        return comments;
    }
    componentWillMount(){
        this.setState({
            comments: this.createArr()
        });
    }
    componentWillReceiveProps(){
        console.log('comment display', this.props.commentData);
        this.setState({
            comments : this.createArr()
        });
    }
    render(){
        console.log('render')
        return (
            <div className='commentDisplay' id="profile-comment-display">
                <div className='bold' id="profile-likes">{this.props.commentData.likes} likes</div>
                <div className='postInfo' id="profile-post-info">
                    <Link to={`profile/${this.props.commentData.username}`} className='bold username'>{this.props.commentData.username}</Link>
                    <span className='caption' id="profile-caption">{this.props.commentData.caption}</span>
                </div>
                <div id="comment-info-container">
                {this.state.comments}
                </div>
            </div>
        )
    }
}
