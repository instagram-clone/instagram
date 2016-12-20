import React from 'react';

export default class CommentBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            alreadyFavorited : false
        }
    }
    render(){
        return(
            <div className='commentBar'>
                <div onClick={() => this.setState({alreadyFavorited : !this.state.alreadyFavorited})}
                    className={`sprite ${this.state.alreadyFavorited ? `alreadyFavoritedSprite` : `favoriteSprite`}`} >
                </div>
                <input type='text' placeholder='Add a comment...' className='commentInput'/>
                <div className='sprite infoSprite'></div>
            </div>
        )
    }
}
