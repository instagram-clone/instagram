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
      photoItem: nextProps
    })
  }
  render(){
    return(
      <div className="photoGrid">
        <PhotoGridItem posts={this.state.photoItem}/>
      </div>
    )
  }
}