import React from 'react';

export default class CommentBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='commentBar'>
                <div onClick={() => {{this.props.alreadyFavorited ? this.props.unfavorite() : this.props.favorite()}}} className={`sprite ${this.props.alreadyFavorited
                    ? `alreadyFavoritedSprite`
                    : `favoriteSprite`}`}></div>
                <input type='text' placeholder='Add a comment...' className='commentInput'/>
                <div className='sprite infoSprite'></div>
            </div>
        )
    }
}
