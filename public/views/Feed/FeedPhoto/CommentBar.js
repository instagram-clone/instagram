import React from 'react';

export default class CommentBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleCommentChange(event){
        this.setState({
            text: event.target.value
        })
        if(event.key === 'Enter'){
            this.props.postComment(event.target.value)
            this.setState({
                text: ''
            })
        }
    }
    render() {
        return (
            <div className='commentBar'>
                <div id="profile-heart" onClick={() => {{this.props.alreadyFavorited ? this.props.unfavorite() : this.props.favorite()}}} className={`sprite ${this.props.alreadyFavorited
                    ? `alreadyFavoritedSprite`
                    : `favoriteSprite`}`}></div>
                <input id="profile-input" value={this.state.text} onChange={this.handleCommentChange.bind(this)} onKeyPress={this.handleCommentChange.bind(this)} type='text' placeholder='Add a comment...' className='commentInput'/>
                <div className='sprite infoSprite' id="profile-sprite"></div>
            </div>
        )
    }
}
