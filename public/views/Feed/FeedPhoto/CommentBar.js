import React from 'react';

export default class CommentBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleCommentChange(event){
        if(event.key === 'Enter'){
            this.props.postComment(event.target.value)
        }
    }
    render() {
        return (
            <div className='commentBar'>
                <div onClick={() => {{this.props.alreadyFavorited ? this.props.unfavorite() : this.props.favorite()}}} className={`sprite ${this.props.alreadyFavorited
                    ? `alreadyFavoritedSprite`
                    : `favoriteSprite`}`}></div>
                <input onKeyPress={this.handleCommentChange.bind(this)} type='text' placeholder='Add a comment...' className='commentInput'/>
                <div className='sprite infoSprite'></div>
            </div>
        )
    }
}
