import React from 'react';
import {Link} from 'react-router';

export default class CommentDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : props.commentData.comments.map((comment, i) => {
                            return (
                                <div key={i} className='commentInfo'>
                                    <Link to={`profile/${comment.username}`} className='bold username'>{comment.username}</Link>
                                    <span className='comment'>{comment.comment}</span>
                                </div>
                            )
                       })
        }
    }
    render(){
        return (
            <div className='commentDisplay'>
                <div className='bold'>{this.props.commentData.likes} likes</div>
                <div className='postInfo'>
                    <Link to={`profile/${this.props.commentData.username}`} className='bold username'>{this.props.commentData.username}</Link>
                    <span className='caption'>{this.props.commentData.caption}</span>
                </div>
                {this.state.comments}
            </div>
        )
    }
}
