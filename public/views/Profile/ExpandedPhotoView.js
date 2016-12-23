import React from 'react';
import CommentDisplay from './../Feed/FeedPhoto/CommentDisplay';
import CommentBar from './../Feed/FeedPhoto/CommentBar';
import {getAllUserData} from './../../utils/getLoggedInUser';

export default class ExpandedPhotoView extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      alreadyLiked: 'false'
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

    postComment(comment) {
        // console.log(this.state.userData)
        axios.post('/api/postComment', {
            comment,
            userid: this.state.userData.data._id,
            photoid: this.props.photo._id,
            username: this.state.userData.data.username
        })
        let newComments = this.state.comments;
        newComments.push({
            username: this.state.userData.data.username,
            comment
        })
        this.setState({
            comments : newComments
        })
    }

  render(){
    console.log('expand handle', this.props)
    var bgImg = {
      backgroundImage: 'url(' + this.props.photourl +')',
      backgroundPosition: 'center'
    }
    return(
      <div className="expanded-view">
        <span onClick={() => {this.props.close()}}>x</span>
        <div className="expanded-bg"></div>
        <div id="expanded-content">
        <figure className={this.props.filter}>
          <img src={this.props.photourl} />
        </figure>
          <div className="expand-comments">
          
          <CommentDisplay 
          commentData={{
                    likes: this.props.info.likes.length,
                    username: this.props.info.author.username,
                    caption: this.props.info.description,
                    comments: this.props.info.comments
                }}
          />
          <CommentBar 
          alreadyFavorited={this.state.alreadyLiked}
          favorite={this.addFavorite.bind(this)}
          unfavorite={this.removeFavorite.bind(this)}
          postComment = {this.postComment.bind(this)}
          />
          </div>
        
        </div>
      </div>
    )
  }
}