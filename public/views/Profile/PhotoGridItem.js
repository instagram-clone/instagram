import React from 'react';

export default class PhotoGridItem extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  componentWillReceiveProps(nextProps){
    console.log('grid item');
    this.setState({
      // userPosts: nextProps.posts.posts
    })
  }
  render(){
    return(
      <div className="picItem">
        <div className="hover-box">
          <p>#likes #comments</p>
        </div>
        <img src="https://s3.amazonaws.com/ig-clone/mountains-depart.jpg" />
      </div>
    )
  }
}