import React from 'react';
import axios from 'axios';
import {getAllUserData} from '../../../utils/getLoggedInUser';

export default class CommentBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            showDelete: false
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
    // deletePhoto(){
    //     console.log('deleting photo' + this.props.photoID);
    //     axios.delete('/api/delete/' + this.props.photoID).then(res =>{
    //         console.log(res);
    //         alert('deleted photo');
    //     }).catch(err => {
    //         console.log('error');
    //     })
    // }
    // toggleDelete(){
    //     this.setState({
    //         showDelete:!this.state.showDelete
    //     });
    //     console.log(this.state.showDelete);
    // }
    render() {
        console.log(this.props.alreadyFavorited)
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
