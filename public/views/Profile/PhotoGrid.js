import React from 'react';
import PhotoGridItem from './PhotoGridItem';

export default class PhotoGrid extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'photo grid');
    this.setState({
      // picInfo: nextProps.posts
    })
  }
  render(){
    
    return(
      <div className="photoGrid">
        <PhotoGridItem
          // author={this.state.picInfo.author}
          // photourl={this.state.picInfo.photourl}
          // timestamp={this.state.picInfo.timestamp}
          // likes={this.state.picInfo.likes}
          // comments={this.state.picInfo.comments}
          // description={this.state.picInfo.description}
        />
        <PhotoGridItem
          // author={this.state.picInfo.author}
          // photourl={this.state.picInfo.photourl}
          // timestamp={this.state.picInfo.timestamp}
          // likes={this.state.picInfo.likes}
          // comments={this.state.picInfo.comments}
          // description={this.state.picInfo.description}
        />
        <PhotoGridItem
          // author={this.state.picInfo.author}
          // photourl={this.state.picInfo.photourl}
          // timestamp={this.state.picInfo.timestamp}
          // likes={this.state.picInfo.likes}
          // comments={this.state.picInfo.comments}
          // description={this.state.picInfo.description}
        />
        <PhotoGridItem
          // author={this.state.picInfo.author}
          // photourl={this.state.picInfo.photourl}
          // timestamp={this.state.picInfo.timestamp}
          // likes={this.state.picInfo.likes}
          // comments={this.state.picInfo.comments}
          // description={this.state.picInfo.description}
        />
      </div>
    )
  }
}