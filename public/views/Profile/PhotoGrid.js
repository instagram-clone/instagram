import React from 'react';
import PhotoGridItem from './PhotoGridItem';

export default class PhotoGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.posts, 'photo grid');
    this.setState({
      picInfo: nextProps.posts
    }, () => {console.log(this.state, 'state')});
    
  }
  render(){
    let posts = [];
    if(this.state.picInfo){
      posts = this.state.picInfo;
    }
    console.log(posts);
    const imgList = posts.map(post => (
      <PhotoGridItem
        author={post.author}
        comments={post.comments}
        likes={post.likes}
        description={post.description}
        filter={post.filter}
        photourl={post.photourl}
        timestamp={post.timestamp}
        />
    ) );
    return(
      <div className="photoGrid">
        {imgList}
      </div>
    )
  }
}